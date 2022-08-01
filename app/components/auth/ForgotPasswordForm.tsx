import { ForgotPassword } from "../../db/auth/auth.validation"
import { Form, FORM_ERROR } from "../common/form/Form"
import { TextFiled } from "../common/form/TextFiled"

type Props = {
  submitted: boolean
  onSubmit: (v: any) => void
}

export const ForgotPasswordForm = ({ submitted, onSubmit }: Props) => {
  const handleSubmit = async (values) => {
    try {
      onSubmit(values)
    } catch (error: any) {
      return {
        [FORM_ERROR]: "Sorry, we had an unexpected error. Please try again.",
      }
    }
  }

  return (
    <>
      <h1>Forgot your password?</h1>
      {submitted ? (
        <div>
          <h2>Request Submitted</h2>
          <p>
            If your email is in our system, you will receive instructions to reset your password
            shortly.
          </p>
        </div>
      ) : (
        <Form
          submitText="Send Reset Password Instructions"
          schema={ForgotPassword}
          initialValues={{ email: "" }}
          onSubmit={handleSubmit}
        >
          <TextFiled name="email" label="Email" placeholder="Email" />
        </Form>
      )}
    </>
  )
}
