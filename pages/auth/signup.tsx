import Layout from "app/layouts/Layout"
import { SignupForm } from "app/containers/auth/SignupForm"
import { getSignupMessage } from "../../app/localization/common"

const SignupPage = () => (
  <Layout title={getSignupMessage()}>
    <SignupForm />
  </Layout>
)

export default SignupPage
