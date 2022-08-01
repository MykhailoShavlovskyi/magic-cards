import Layout from "app/layouts/Layout"
import { ForgotPasswordForm } from "../../app/containers/auth/ForgotPasswordForm"
import { getForgotPasswordMessage } from "../../app/localization/shared"

const ForgotPasswordPage = () => (
  <Layout title={getForgotPasswordMessage()}>
    <ForgotPasswordForm />
  </Layout>
)

export default ForgotPasswordPage
