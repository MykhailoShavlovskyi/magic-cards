import { getProducts, ResolvedProduct } from "../../../db/products/products.querties"
import { LinkCard } from "../../common/card/LinkCard"
import { Routes } from "@blitzjs/next"
import styled from "styled-components"
import { spacing } from "../../common/spacing"
import { GetServerSideProps } from "next"
import db from "../../../../db"
import { Product } from "@prisma/client"

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${spacing.s32};
`

export const ProductCards = ({ products }: { products: ResolvedProduct[] }) => (
  <StyledContainer>
    {products.map((v) => (
      <LinkCard
        key={v.id}
        value={`${v.name}: $${v.defaultPrice}`}
        href={Routes.ProductPage({ id: v.id })}
      />
    ))}
  </StyledContainer>
)
