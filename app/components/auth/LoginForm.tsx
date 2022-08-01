import { AuthenticationError } from "blitz"
import Link from "next/link"
import { TextFiled } from "app/components/common/form/TextFiled"
import { Form, FORM_ERROR } from "app/components/common/form/Form"
import { Login } from "app/db/auth/auth.validation"
import { Routes } from "@blitzjs/next"

type Props = {
  onSubmit: (v: typeof Login) => void
}

export const LoginForm = ({ onSubmit }: Props) => {
  const handleSubmit = async (values) => {
    try {
      onSubmit(values)
    } catch (error: any) {
      if (error instanceof AuthenticationError) {
        return { [FORM_ERROR]: "Sorry, those credentials are invalid" }
      } else {
        return {
          [FORM_ERROR]:
            "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
        }
      }
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <Form
        submitText="Login"
        schema={Login}
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <TextFiled name="email" label="Email" placeholder="Email" />
        <TextFiled name="password" label="Password" placeholder="Password" type="password" />
        <div>
          <Link href={Routes.ForgotPasswordPage()}>
            <a>Forgot your password?</a>
          </Link>
        </div>
      </Form>

      <div style={{ marginTop: "1rem" }}>
        Or{" "}
        <Link href={Routes.SignupPage()}>
          <a>Sign Up</a>
        </Link>
      </div>
    </div>
  )
}
