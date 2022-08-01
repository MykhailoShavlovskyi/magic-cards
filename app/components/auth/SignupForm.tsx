import { TextFiled } from "app/components/common/form/TextFiled"
import { Form, FORM_ERROR } from "app/components/common/form/Form"
import { Signup } from "app/db/auth/auth.validation"

type Props = {
  onSubmit: (v: any) => void
}

const initialValues = {
  email: "",
  password: "",
}

export const SignupForm = (props: Props) => {
  const handleSubmit = async (values) => {
    try {
      props.onSubmit(values)
    } catch (error: any) {
      if (error.code === "P2002" && error.meta?.target?.includes("email")) {
        // This error comes from Prisma
        return { email: "This email is already being used" }
      } else {
        return { [FORM_ERROR]: error.toString() }
      }
    }
  }

  return (
    <div>
      <h1>Create an Account</h1>
      <Form
        submitText="Create Account"
        schema={Signup}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <TextFiled name="email" label="Email" placeholder="Email" />
        <TextFiled name="password" label="Password" placeholder="Password" type="password" />
      </Form>
    </div>
  )
}
