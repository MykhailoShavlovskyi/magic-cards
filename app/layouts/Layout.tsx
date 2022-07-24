import Head from "next/head"
import React from "react"
import { BlitzLayout } from "@blitzjs/next"

const Layout: BlitzLayout<{ title?: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => (
  <>
    <Head>
      <title>{title || "magic-cards-blitz"}</title>
      <link rel="icon" href="/public/favicon.ico" />
    </Head>
    {children}
  </>
)

export default Layout
