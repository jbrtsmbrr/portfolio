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
  title: 'Joe Bert',
  description: "Joe Bert's Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} relative bg-slate-50 main h-auto`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
