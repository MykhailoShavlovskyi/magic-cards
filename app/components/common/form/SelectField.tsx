import { forwardRef, PropsWithoutRef } from "react"
import { useField, useFormikContext } from "formik"
import styled from "styled-components"
import { ErrorMessage } from "./ErrorMessage"
import { Label } from "./Label"

const StyledContainer = styled.div`
  select {
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    border-radius: 3px;
    border: 1px solid purple;
    appearance: none;
    margin-top: 0.5rem;
  }
`

export interface TextFieldProps extends PropsWithoutRef<JSX.IntrinsicElements["select"]> {
  name: string
  label: string
  options: { value: string; label: string }[]
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
}

export const SelectField = forwardRef<HTMLSelectElement, TextFieldProps>(
  ({ name, label, options, outerProps, ...props }, ref) => {
    const [input] = useField(name)
    const { isSubmitting } = useFormikContext()

    return (
      <StyledContainer {...outerProps}>
        <Label value={label}>
          <select {...input} disabled={isSubmitting} {...props} ref={ref}>
            {options.map((v) => (
              <option key={v.value} value={v.value}>
                {v.label}
              </option>
            ))}
          </select>
        </Label>
        <ErrorMessage name={name} />
      </StyledContainer>
    )
  }
)
