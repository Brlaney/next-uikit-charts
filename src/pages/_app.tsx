import * as React from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import 'uikit/dist/js/uikit.js'
import 'uikit/dist/css/uikit.css'
import '@/styles/globals.scss'


export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  const router = useRouter()

  return (
    <>
      <Layout>
        <Component {...pageProps} key={router.route}  />
      </Layout>
    </>
  )
}
