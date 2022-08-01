import { ErrorMessage as ErrorMessageBase } from "formik"

export const ErrorMessage = ({ name }: { name: string }) => (
  <ErrorMessageBase name={name}>
    {(msg) => (
      <div role="alert" style={{ color: "red" }}>
        {msg}
      </div>
    )}
  </ErrorMessageBase>
)
