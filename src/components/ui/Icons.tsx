import type { ReactNode } from 'react'

interface IconProps {
  className?: string
}

function IconBase({
  className,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </IconBase>
  )
}

export function MailIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </IconBase>
  )
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </IconBase>
  )
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M6.6 3.5h2.6l1.4 4.1-2 1.4a12 12 0 0 0 6.4 6.4l1.4-2 4.1 1.4v2.6a2.1 2.1 0 0 1-2.3 2.1C10.8 18.9 5.1 13.2 4.5 5.8a2.1 2.1 0 0 1 2.1-2.3Z" />
    </IconBase>
  )
}

export function MenuIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </IconBase>
  )
}

export function CloseIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="m6 6 12 12M18 6 6 18" />
    </IconBase>
  )
}

export function LeafIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14Z" />
      <path d="M5 19 14 10" />
    </IconBase>
  )
}

export function GrainIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 22V6" />
      <path d="M12 6c-.9-1-.9-2.6 0-3.6.9 1 .9 2.6 0 3.6Z" />
      <path d="M12 10.5c-2.4-.2-3.8-1.8-3.8-4 2.4.2 3.8 1.8 3.8 4Z" />
      <path d="M12 10.5c2.4-.2 3.8-1.8 3.8-4-2.4.2-3.8 1.8-3.8 4Z" />
      <path d="M12 15c-2.4-.2-3.8-1.8-3.8-4 2.4.2 3.8 1.8 3.8 4Z" />
      <path d="M12 15c2.4-.2 3.8-1.8 3.8-4-2.4.2-3.8 1.8-3.8 4Z" />
      <path d="M12 19.5c-2.4-.2-3.8-1.8-3.8-4 2.4.2 3.8 1.8 3.8 4Z" />
      <path d="M12 19.5c2.4-.2 3.8-1.8 3.8-4-2.4.2-3.8 1.8-3.8 4Z" />
    </IconBase>
  )
}

export function HandSproutIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M13 12V6.5" />
      <path d="M13 9c-2.5 0-4-1.4-4-3.7 2.5 0 4 1.4 4 3.7Z" />
      <path d="M13 8c0-2.3 1.5-3.7 4-3.7 0 2.3-1.5 3.7-4 3.7Z" />
      <path d="M3 14.5h2.6l3.2 1.6h3.6a1.4 1.4 0 0 1 0 2.8H9" />
      <path d="M5.6 20.5h7.1l6.8-4.1a1.5 1.5 0 0 0-1.6-2.5l-4.1 2.3" />
    </IconBase>
  )
}

export function SeedlingIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M4.5 20h15" />
      <path d="M12 20v-8.5" />
      <path d="M12 12.5c0-3.4-2.2-5.6-6-5.6 0 3.4 2.2 5.6 6 5.6Z" />
      <path d="M12 14.5c0-3.4 2.2-5.6 6-5.6 0 3.4-2.2 5.6-6 5.6Z" />
    </IconBase>
  )
}

export function GearIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M10.63 5.13 10.92 2.86h2.16l.29 2.27 2.52 1.05 1.81-1.4 1.52 1.52-1.4 1.81 1.05 2.52 2.27.29v2.16l-2.27.29-1.05 2.52 1.4 1.81-1.52 1.52-1.81-1.4-2.52 1.05-.29 2.27h-2.16l-.29-2.27-2.52-1.05-1.81 1.4-1.52-1.52 1.4-1.81-1.05-2.52-2.27-.29v-2.16l2.27-.29 1.05-2.52-1.4-1.81 1.52-1.52 1.81 1.4Z" />
      <circle cx="12" cy="12" r="3" />
    </IconBase>
  )
}


export function DiamondIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M6.5 4h11L21 9l-9 11L3 9l3.5-5Z" />
      <path d="M3 9h18M9.5 4 8 9l4 11 4-11-1.5-5" />
    </IconBase>
  )
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 3 5 6v5c0 4.4 3 8.3 7 10 4-1.7 7-5.6 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </IconBase>
  )
}

export function StarIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5Z" />
    </IconBase>
  )
}

export function AromaIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M8 20c-1.5-2 1.5-3.5 0-5.5S6.5 11 8 9" />
      <path d="M12 20c-1.5-2.2 1.5-3.8 0-6s-1.5-4 0-6" />
      <path d="M16 20c-1.5-2 1.5-3.5 0-5.5S14.5 11 16 9" />
    </IconBase>
  )
}

export function BowlIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M3.5 13h17c0 4.2-3.8 7-8.5 7s-8.5-2.8-8.5-7Z" />
      <path d="M8 9.5c-.9-1 .9-2 0-3.2M12 9.5c-.9-1 .9-2 0-3.2M16 9.5c-.9-1 .9-2 0-3.2" />
    </IconBase>
  )
}

export function PackageIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 3 4.5 7v10L12 21l7.5-4V7L12 3Z" />
      <path d="M12 12 4.5 7.5M12 12l7.5-4.5M12 12v9" />
    </IconBase>
  )
}

export function HandshakeIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M8.5 12.5 6 10l2.2-2.2a2.2 2.2 0 0 1 3.1 0L12 8.5" />
      <path d="M15.5 12.5 18 10l-2.2-2.2a2.2 2.2 0 0 0-3.1 0L12 8.5" />
      <path d="M7.5 14.5c1.2 1.4 2.7 2.3 4.5 2.3s3.3-.9 4.5-2.3" />
      <path d="M4.5 11.5 3 13l2.8 2.8a2 2 0 0 0 2.8 0l.7-.7" />
      <path d="M19.5 11.5 21 13l-2.8 2.8a2 2 0 0 1-2.8 0l-.7-.7" />
    </IconBase>
  )
}

export function GrowthIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M4 19h16" />
      <path d="M7 16V12" />
      <path d="M12 16V8" />
      <path d="M17 16V5" />
      <path d="M14.5 6.5 17 4l2.5 2.5" />
    </IconBase>
  )
}

export function PeopleIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <circle cx="9" cy="8" r="2.4" />
      <circle cx="16" cy="9" r="2" />
      <path d="M3.5 18.5c.4-3 2.5-4.8 5.5-4.8s5.1 1.8 5.5 4.8" />
      <path d="M14 14.2c2.2.2 3.9 1.5 4.4 4.3" />
    </IconBase>
  )
}

export function SendIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M4 11.5 20 4l-4.5 16-3.2-6.2L4 11.5Z" />
      <path d="M12.3 13.8 20 4" />
    </IconBase>
  )
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </IconBase>
  )
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M14 8.2h2.2V5h-2.2C11.6 5 10 6.5 10 8.8V11H8v3h2v6h3v-6h2.2l.6-3H13V9c0-.5.2-.8 1-.8Z" />
    </IconBase>
  )
}

export function ExternalLinkIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M14 4h6v6" />
      <path d="M10 14 20 4" />
      <path d="M18 14.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4.5" />
    </IconBase>
  )
}
