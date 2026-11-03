'use client'

import * as React from 'react'
import { OTPInput, OTPInputContext } from 'input-otp'
import { MinusIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        'flex items-center justify-center gap-2 has-disabled:opacity-50',
        containerClassName,
      )}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn('flex items-center gap-2', className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        'relative flex h-12 w-12 items-center justify-center rounded-xl border-2 border-border/80 bg-background/90 text-lg font-bold text-foreground shadow-xs transition-all duration-200 outline-none',
        'hover:border-primary/50',
        'data-[active=true]:border-primary data-[active=true]:bg-primary/5 data-[active=true]:ring-4 data-[active=true]:ring-primary/20 data-[active=true]:scale-105 data-[active=true]:z-10',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-primary h-5 w-0.5 rounded-full duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="input-otp-separator" role="separator" className="text-muted-foreground flex items-center justify-center px-1" {...props}>
      <MinusIcon className="h-4 w-4" />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
