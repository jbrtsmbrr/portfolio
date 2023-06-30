import Navigation from "@/components/Navigation";
import "@/styles/globals.css";
import { Inter, Karla } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const roboto = Karla({
  weight: ['400', '700'],
  // style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Joe Bert Sembrero',
  description: "Joe Bert's Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} relative bg-slate-50 main h-auto transition duration-700 after:invert dark:after:invert-0 dark:bg-slate-900 dark:text-slate-200`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
