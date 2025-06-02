/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [nonce, setNonce] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Check if Phantom wallet is installed
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window as any

      if (solana && solana.isPhantom) {
        console.log("Phantom wallet found!")

        // Check if user has already authorized the app
        const response = await solana.connect({ onlyIfTrusted: true })
        setWalletAddress(response.publicKey.toString())
      } else {
        setError("Phantom wallet not found. Please install it first.")
        console.log("Phantom wallet not found. Please install it first.")
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
        console.log("Connected with wallet:", walletAddress)
      }
    } catch (error: any) {
      console.error("Error connecting to wallet:", error)
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
      const response = await fetch("/api/auth/get-challenge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ wallet: walletAddress }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to get challenge")
      }

      setNonce(data.nonce)
    } catch (error: any) {
      console.error("Error getting challenge:", error)
      setError("Failed to get challenge: " + (error.message || "Unknown error"))
    } finally {
      setIsSigningIn(false)
    }
  }

  const displayAddress = (address: string) => {
    return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-teal-900/20 to-slate-800 p-4">
      {/* Glassmorphism container */}
      <div className="relative w-full max-w-md p-8 backdrop-blur-xl bg-slate-900/40 border border-teal-800/30 rounded-2xl shadow-2xl overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-white mb-2 text-center">Wallet Login</h1>
          <p className="text-slate-300 text-center mb-8">Connect your Solana wallet to continue</p>

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

              {nonce ? (
                <div className="p-4 bg-slate-800/40 border border-teal-700/30 rounded-lg">
                  <p className="text-slate-400 text-sm mb-1">Challenge Nonce</p>
                  <p className="text-teal-300 font-mono break-all">{nonce}</p>
                </div>
              ) : (
                <button
                  onClick={signIn}
                  disabled={isSigningIn}
                  className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 rounded-lg text-white font-medium transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-teal-500/25"
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
                      Getting Challenge...
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
              className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 rounded-lg text-white font-medium transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-teal-500/25"
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
