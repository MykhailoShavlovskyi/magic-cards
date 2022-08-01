import React, { PropsWithChildren } from "react"
import Layout from "./Layout"
import { StoreNav } from "../containers/store/StoreNav"
import { BlitzLayout } from "@blitzjs/next"

export const StoreLayout: BlitzLayout<PropsWithChildren<{ title?: string }>> = ({
  title,
  children,
}) => (
  <Layout title={title}>
    <StoreNav />
    {children}
  </Layout>
)
