import { UrlObject } from "url"
import styled from "styled-components"
import { spacing } from "./common/spacing"
import Link from "next/link"

const StyledContainer = styled.div`
  margin-bottom: ${spacing.s16};

  div {
    display: flex;
  }

  h3 {
    margin-bottom: ${spacing.s8};
    margin-right: ${spacing.s8};
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }

  h1 {
    margin: 0;
  }
`

export const Breadcrumb = ({
  items,
}: {
  items: { value: string; href?: string | UrlObject }[]
}) => {
  const last = items[items.length - 1]
  const rest = items.concat([])
  rest.splice(items.length - 1, 1)

  if (last == null) return null
  return (
    <StyledContainer>
      <div>
        {rest.map((v, i) => (
          <Link key={i} href={v.href ?? ""}>
            <h3>
              <>
                {v.value} {">"}
              </>
            </h3>
          </Link>
        ))}
      </div>
      <h1>{last.value}</h1>
    </StyledContainer>
  )
}
