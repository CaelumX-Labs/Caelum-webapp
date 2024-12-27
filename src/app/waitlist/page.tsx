'use client'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '../components/Button'
import { NameInput } from '../components/form/name-input'
import { EmailInput } from '../components/form/email-input'
import Logo from '../assets/Logo.svg'
import { div } from 'framer-motion/client'
interface FormData {
  fullName: string
  email: string
}

interface FormErrors {
  fullName?: string
  email?: string
}

export default function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData)
    }
  }

  return (

    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center px-4">
      {/* Background effects */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'radial-gradient(circle at center, transparent 0%, transparent 100%), radial-gradient(circle at center, #ffffff 0%, transparent 0.15%)',
          backgroundSize: '3px 3px',
          backgroundPosition: '0 0',
          opacity: 0.3,
        }}
      />
      
      {/* Gradient lines */}
      <div className="absolute left-0 top-1/2 w-32 h-px bg-gradient-to-r from-pink-500 to-transparent" />
      <div className="absolute right-0 top-1/2 w-32 h-px bg-gradient-to-l from-blue-500 to-transparent" />
      
      {/* Logo */}
      <div className="mb-8">
      <img src={Logo.src} alt="Logo" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <div className="text-gray-500 text-sm tracking-wider">
          Caelum X is a pioneering decentralized application (dApp) designed to revolutionize carbon credit trading using the power of blockchain technology. By leveraging Solana's high throughput and low transaction costs, Caelum X makes carbon credit trading efficient, transparent, and accessible to individuals, companies, and organizations.
         </div>
          <h1 className="text-4xl font-bold tracking-tight">
            Join the waitlist for the{' '}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                CaelumX
            </span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <NameInput
            value={formData.fullName}
            onChange={(value) => setFormData(prev => ({ ...prev, fullName: value }))}
            error={errors.fullName}
          />

          <EmailInput
            value={formData.email}
            onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
            error={errors.email}
          />

          <Button 
            label="submit"
            className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors duration-200"
          >
            Continue
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  )
}

