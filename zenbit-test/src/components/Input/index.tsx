import React from 'react'
import { InputHTMLAttributes } from 'react'
import { Control, Controller } from 'react-hook-form'
import { Input as StyledInput, ErrorText } from './style'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder: string
  control: Control<any>
}

export function Input({ name, placeholder, control, ...props }: InputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <StyledInput
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            {...props}
          />
          {error ? <ErrorText>{error?.message}</ErrorText> : null}
        </>
      )}
    />
  )
}
