import { useMutation } from "@blitzjs/rpc"
import login from "../../db/auth/mutations/login"
import { useRouter } from "next/router"
import { LoginForm as LoginFormBase } from "../../components/auth/LoginForm"

export const LoginForm = () => {
  const [loginMutation] = useMutation(login)
  const router = useRouter()
  const handleLogin = async (values) => {
    await loginMutation(values)
    const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
    await router.push(next)
  }

  return <LoginFormBase onSubmit={handleLogin} />
}
