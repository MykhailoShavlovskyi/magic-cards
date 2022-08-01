import React, { PropsWithChildren } from "react"
import Layout from "./Layout"
import { AdminNav } from "../containers/admin/AdminNav"
import { spacing } from "../components/common/spacing"
import styled from "styled-components"
import { BlitzLayout } from "@blitzjs/next"
import { RoleGuard } from "../db/auth/RoleGuard"
import { Role } from "@prisma/client"

const StyledContainer = styled.div`
  padding: ${spacing.s32};
`

export const AdminLayout: BlitzLayout<PropsWithChildren<{ title?: string }>> = ({
  title,
  children,
}) => (
  <Layout title={title}>
    <RoleGuard role={Role.ADMIN}>
      <AdminNav />
      <StyledContainer>{children}</StyledContainer>
    </RoleGuard>
  </Layout>
)

AdminLayout.authenticate = true
