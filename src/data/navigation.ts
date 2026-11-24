export interface NavigationLink {
  label: string
  path: string
}

export const navigationLinks: readonly NavigationLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Products', path: '/products' },
  { label: 'Quality', path: '/quality' },
  { label: 'Dealers', path: '/dealers' },
  { label: 'Contact', path: '/contact' },
]
