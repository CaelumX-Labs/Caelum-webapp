'use client'

import { Mail } from 'lucide-react'
import { CustomInput } from '../ui/custom-input'

interface EmailInputProps {
  value: string
  onChange: (value: string) => void
  error?: string
}

export function EmailInput({ value, onChange, error }: EmailInputProps) {
  return (
    <CustomInput
      icon={Mail}
      type="email"
      placeholder="Email address..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      error={error}
      required
    />
  )
}

