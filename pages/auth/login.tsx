import Layout from "app/layouts/Layout"
import { LoginForm } from "app/containers/auth/LoginForm"
import { getLoginMessage } from "../../app/localization/common"

const LoginPage = () => (
  <Layout title={getLoginMessage()}>
    <LoginForm />
  </Layout>
)

export default LoginPage
