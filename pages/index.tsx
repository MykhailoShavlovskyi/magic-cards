import Link from "next/link"
import Layout from "app/layouts/Layout"
import { Routes } from "@blitzjs/next"

const Home = () => (
  <Layout title="Home">
    <>
      <Link href={Routes.SignupPage()}>
        <a className="button small">
          <strong>Sign Up</strong>
        </a>
      </Link>
      <Link href={Routes.LoginPage()}>
        <a className="button small">
          <strong>Login</strong>
        </a>
      </Link>
    </>
  </Layout>
)

export default Home
