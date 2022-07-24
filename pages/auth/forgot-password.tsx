import Layout from "app/layouts/Layout"
import forgotPassword from "app/data/auth/mutations/forgotPassword"
import { useMutation } from "@blitzjs/rpc"
import { ForgotPasswordForm } from "../../app/components/auth/ForgotPasswordForm"

const ForgotPasswordPage = () => {
  const [forgotPasswordMutation, { isSuccess }] = useMutation(forgotPassword)
  const handleSubmit = (values) => forgotPasswordMutation(values)

  return (
    <Layout title="Forgot Your Password?">
      <ForgotPasswordForm submitted={isSuccess} onSubmit={handleSubmit} />
    </Layout>
  )
}

export default ForgotPasswordPage
