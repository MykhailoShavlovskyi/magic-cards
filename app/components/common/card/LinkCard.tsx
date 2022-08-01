import { spacing } from "../spacing"
import styled from "styled-components"
import { Card } from "./Card"
import { UrlObject } from "url"
import Link from "next/link"

const StyledCard = styled(Card)`
  margin-right: ${spacing.s32};
  margin-bottom: ${spacing.s32};
  cursor: pointer;
`

export const LinkCard = ({ href, value }: { href: UrlObject; value: string }) => (
  <Link href={href}>
    <StyledCard>
      <h2>{value}</h2>
    </StyledCard>
  </Link>
)
