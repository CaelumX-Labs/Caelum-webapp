/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react"
import bs58 from "bs58"

export default function LoginPage() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [nonce, setNonce] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loggedIn, setLoggedIn] = useState(false)


  useEffect(() => {
    if (loggedIn) {
      // Option 1: With router.push (if it's a relative route or Next.js internal route)
      // router.push('https://registry.caelum-x.com');

      // Option 2: With window.location.href
      window.location.href = "https://registry.caelum-x.com";
    }
  }, [loggedIn]);
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window as any

      if (solana && solana.isPhantom) {
        const response = await solana.connect({ onlyIfTrusted: true })
        setWalletAddress(response.publicKey.toString())
      } else {
        setError("Phantom wallet not found. Please install it first.")
      }
    } catch (error) {
      console.log("Error checking if wallet is connected:", error)
    }
  }

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected()
    }
    window.addEventListener("load", onLoad)
    return () => window.removeEventListener("load", onLoad)
  }, [])

  const connectWallet = async () => {
    setError(null)
    setIsConnecting(true)

    try {
      const { solana } = window as any

      if (solana) {
        const response = await solana.connect()
        const walletAddress = response.publicKey.toString()
        setWalletAddress(walletAddress)
      }
    } catch (error: any) {
      setError("Failed to connect wallet: " + (error.message || "Unknown error"))
    } finally {
      setIsConnecting(false)
    }
  }

  const signIn = async () => {
    if (!walletAddress) return

    setError(null)
    setIsSigningIn(true)
    setNonce(null)

    try {
      // Step 1: Fetch nonce
      const response = await fetch("http://localhost:8080/api/auth/get-challenge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wallet: walletAddress }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.message || "Failed to get challenge")

      const receivedNonce = data.nonce
      setNonce(receivedNonce)

      // Step 2: Prompt wallet to sign the nonce
      const { solana } = window as any
      const encodedMessage = new TextEncoder().encode(receivedNonce)
      const signed = await solana.signMessage(encodedMessage, "utf8")
      const signature = bs58.encode(signed.signature)

      // Step 3: Send signed message for verification
      const verifyRes = await fetch("http://localhost:8080/api/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          wallet: walletAddress,
          nonce: receivedNonce,
          signature,
        }),
      })

      const verifyData = await verifyRes.json()
      if (!verifyRes.ok) throw new Error(verifyData.message || "Verification failed")

      // Step 4: Store JWT token and mark as logged in
      localStorage.setItem("auth_token", verifyData.token)
      setLoggedIn(true)
    } catch (error: any) {
      setError("Sign-in failed: " + (error.message || "Unknown error"))
    } finally {
      setIsSigningIn(false)
    }
  }

  const displayAddress = (address: string) => {
    return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-teal-900/20 to-slate-800 p-4">
      <div className="relative w-full max-w-md p-8 backdrop-blur-xl bg-slate-900/40 border border-teal-800/30 rounded-2xl shadow-2xl overflow-hidden">
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-white mb-2 text-center">Wallet Login</h1>
          <p className="text-slate-300 text-center mb-8">
            {loggedIn ? "You're logged in!" : "Connect your Solana wallet to continue"}
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-700/50 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}

          {walletAddress ? (
            <div className="space-y-6">
              <div className="p-4 bg-slate-800/40 border border-teal-700/30 rounded-lg">
                <p className="text-slate-400 text-sm mb-1">Connected Wallet</p>
                <p className="text-teal-300 font-mono">{displayAddress(walletAddress)}</p>
              </div>

              {loggedIn ? (
                <div className="text-green-400 text-center font-medium">✅ Authenticated</div>
              ) : (
                <button
                  onClick={signIn}
                  disabled={isSigningIn}
                  className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 rounded-lg text-white font-medium transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-teal-500/25"
                >
                  {isSigningIn ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Signing in...
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </button>
              )}
            </div>
          ) : (
            <button
              onClick={connectWallet}
              disabled={isConnecting}
              className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 rounded-lg text-white font-medium transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-teal-500/25"
            >
              {isConnecting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Connecting...
                </span>
              ) : (
                "Connect Wallet"
              )}
            </button>
          )}

          <div className="mt-6 text-center">
            <p className="text-slate-400 text-sm">
              Don&apos;t have a wallet?{" "}
              <a
                href="https://phantom.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 transition-colors"
              >
                Get Phantom
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
