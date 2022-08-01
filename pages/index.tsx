import Link from "next/link"
import Layout from "app/layouts/Layout"
import { Routes } from "@blitzjs/next"
import {
  getAdminMessage,
  getHomeMessage,
  getLoginMessage,
  getSignupMessage,
} from "../app/localization/common"
import { getStoreMessage } from "../app/localization/store"
import styled from "styled-components"
import { spacing } from "../app/components/common/spacing"

const A = styled.a`
  margin-right: ${spacing.s8};
`

const Home = () => (
  <Layout title={getHomeMessage()}>
    <>
      <Link href={Routes.SignupPage()}>
        <A className="button small">
          <strong>{getSignupMessage()}</strong>
        </A>
      </Link>
      <Link href={Routes.LoginPage()}>
        <A className="button small">
          <strong>{getLoginMessage()}</strong>
        </A>
      </Link>
      <Link href={Routes.StoreHomePage()}>
        <A className="button small">
          <strong>{getStoreMessage()}</strong>
        </A>
      </Link>
      <Link href={Routes.AdminHomePage()}>
        <A className="button small">
          <strong>{getAdminMessage()}</strong>
        </A>
      </Link>
    </>
  </Layout>
)

export default Home
