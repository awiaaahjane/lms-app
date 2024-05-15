import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head'
import { Fredoka } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ToastProvider } from '@/components/providers/toaster-provider'
import { ConfettiProvider } from '@/components/providers/confetti-provider'

import { ThemeProvider } from '@/components/providers/theme-provider'


const fredoka = Fredoka({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learnify',
  description: 'A Learning Management System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
      <link rel="icon" href="/public/favicon.ico"/>
      </Head>
    <ClerkProvider
    appearance={{
      variables: {
        colorPrimary: "blue",
        colorText: "black"
      }
    }}>
      <html lang='en'>
        <body className={fredoka.className}>
          <ThemeProvider
            attribute='class'
            defaultTheme='light'
            enableSystem
            disableTransitionOnChange>
            <ConfettiProvider />
            <ToastProvider />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
    </>
  )
}
