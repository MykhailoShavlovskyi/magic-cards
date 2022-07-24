import Layout from "app/layouts/Layout"
import { LoginForm } from "app/components/auth/LoginForm"
import { useRouter } from "next/router"
import { useMutation } from "@blitzjs/rpc"
import login from "../../app/data/auth/mutations/login"

const LoginPage = () => {
  const [loginMutation] = useMutation(login)
  const router = useRouter()
  const handleLogin = async (values) => {
    await loginMutation(values)
    const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
    await router.push(next)
  }

  return (
    <Layout title="Log In">
      <LoginForm onSubmit={handleLogin} />
    </Layout>
  )
}

export default LoginPage
