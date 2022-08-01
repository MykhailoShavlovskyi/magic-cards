import { useCallback, useMemo, useState } from "react"
import { LinkCard } from "../../common/card/LinkCard"
import { Routes } from "@blitzjs/next"
import { Product } from "@prisma/client"
import styled from "styled-components"
import { compact } from "lodash"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;

  div {
    display: flex;
  }
`

export const FeaturedCards = ({
  products,
}: {
  products: Pick<Product, "id" | "name" | "defaultPrice">[]
}) => {
  const [index, setIndex] = useState(0)

  const displayed = useMemo(() => {
    const first = index % products.length
    const second = (index + 1) % products.length
    const third = (index + 2) % products.length
    return compact([products[first], products[second], products[third]])
  }, [index, products])

  const updateIndex = useCallback(
    (v) => {
      if (v < 0) {
        setIndex(products.length)
      } else setIndex(v)
    },
    [products.length]
  )

  return (
    <StyledContainer>
      <h1>Fetaured</h1>
      <div>
        <button onClick={() => updateIndex(index - 1)}>{"<"}</button>
        {displayed.map((v) => (
          <LinkCard
            key={v.id}
            href={Routes.ProductPage({ id: v.id })}
            value={`${v.name}: $${v.defaultPrice}`}
          />
        ))}
        <button onClick={() => updateIndex(index + 1)}>{">"}</button>
      </div>
    </StyledContainer>
  )
}
