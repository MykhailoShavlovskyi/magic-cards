import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import signup from "../../db/auth/mutations/signup"
import { Routes } from "@blitzjs/next"
import Layout from "../../layouts/Layout"
import { SignupForm as SignupFormBase } from "../../components/auth/SignupForm"

export const SignupForm = () => {
  const [signupMutation] = useMutation(signup)
  const router = useRouter()
  const handleSignup = async (values) => {
    await signupMutation(values)
    await router.push(Routes.Home())
  }

  return (
    <Layout title="Sign Up">
      <SignupFormBase onSubmit={handleSignup} />
    </Layout>
  )
}
