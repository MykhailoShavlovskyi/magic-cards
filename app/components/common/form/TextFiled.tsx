import { forwardRef, PropsWithoutRef } from "react"
import { useField, useFormikContext } from "formik"
import styled from "styled-components"
import { ErrorMessage } from "./ErrorMessage"
import { Label } from "./Label"

const StyledContainer = styled.div`
  input {
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    border: 1px solid purple;
    appearance: none;
    margin-top: 0.5rem;
  }
`

export interface TextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  name: string
  label: string
  type?: "text" | "password" | "email" | "number"
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
}

export const TextFiled = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ name, label, outerProps, ...props }, ref) => {
    const [input] = useField(name)
    const { isSubmitting } = useFormikContext()

    return (
      <StyledContainer {...outerProps}>
        <Label value={label}>
          <input {...input} disabled={isSubmitting} {...props} ref={ref} />
        </Label>
        <ErrorMessage name={name} />
      </StyledContainer>
    )
  }
)
