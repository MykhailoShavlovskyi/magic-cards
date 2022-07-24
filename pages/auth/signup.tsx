import { useRouter } from "next/router"
import Layout from "app/layouts/Layout"
import { SignupForm } from "app/components/auth/SignupForm"
import { Routes } from "@blitzjs/next"
import { useMutation } from "@blitzjs/rpc"
import signup from "../../app/data/auth/mutations/signup"

const SignupPage = () => {
  const [signupMutation] = useMutation(signup)
  const router = useRouter()
  const handleSignup = async (values) => {
    await signupMutation(values)
    await router.push(Routes.Home())
  }

  return (
    <Layout title="Sign Up">
      <SignupForm onSubmit={handleSignup} />
    </Layout>
  )
}

export default SignupPage
