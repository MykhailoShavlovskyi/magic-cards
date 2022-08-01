import { useMutation } from "@blitzjs/rpc"
import forgotPassword from "../../db/auth/mutations/forgotPassword"
import Layout from "../../layouts/Layout"
import { ForgotPasswordForm as ForgotPasswordFormBase } from "../../components/auth/ForgotPasswordForm"

export const ForgotPasswordForm = () => {
  const [forgotPasswordMutation, { isSuccess }] = useMutation(forgotPassword)

  return (
    <Layout title="Forgot Your Password?">
      <ForgotPasswordFormBase submitted={isSuccess} onSubmit={forgotPasswordMutation} />
    </Layout>
  )
}
