'use client'

import * as React from "react"
import { cn } from "../lib/utils"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {  type LucideIcon } from 'lucide-react'

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon
  label?: string
  error?: string
}

export const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, type, icon: Icon, label, error, ...props }, ref) => {
    return (
      <div className="relative space-y-1 w-full">
        {label && (
          <Label className="text-sm font-medium text-gray-400">
            {label}
          </Label>
        )}
        <div className="relative">
          {Icon && (
            <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
          )}
          <Input
            type={type}
            className={cn(
              "h-12 px-10 bg-[#111111] border-gray-800 rounded-lg",
              "text-white placeholder:text-gray-500",
              "focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/50",
              "transition-all duration-200",
              "hover:border-gray-700",
              error && "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)
CustomInput.displayName = "CustomInput"

