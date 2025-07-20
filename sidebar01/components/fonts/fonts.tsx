import { Inter, Poppins, Syne } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

export const PoppinFont = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const SynesFont = Syne({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
})
