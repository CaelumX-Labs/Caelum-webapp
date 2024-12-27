'use client'

import { User } from 'lucide-react'
import { CustomInput } from '../ui/custom-input'

interface NameInputProps {
  value: string
  onChange: (value: string) => void
  error?: string
}

export function NameInput({ value, onChange, error }: NameInputProps) {
  return (
    <CustomInput
      icon={User}
      placeholder="Full name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      error={error}
      required
    />
  )
}

