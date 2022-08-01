import styled from "styled-components"
import { PropsWithChildren } from "react"

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 1rem;
`

export const Label = ({ value, children }: PropsWithChildren<{ value: string }>) => (
  <StyledLabel>
    {value}
    {children}
  </StyledLabel>
)
