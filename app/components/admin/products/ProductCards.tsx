import styled from "styled-components"
import { Routes } from "@blitzjs/next"
import { LinkCard } from "../../common/card/LinkCard"

const StyledContainer = styled.div`
  display: flex;
`

export const ProductCards = () => (
  <StyledContainer>
    <LinkCard href={Routes.AdminHomePage()} value={"Home"} />
    <LinkCard href={Routes.AdminCategoriesPage()} value={"Categories"} />
    <LinkCard href={Routes.SetsPage()} value={"Sets"} />
    <LinkCard href={Routes.AdminProductsPage()} value={"Products"} />
    <LinkCard href={Routes.AttributesPage()} value={"Attributes"} />
    <LinkCard href={Routes.AttributeCategoriesPage()} value={"Attribute categories"} />
  </StyledContainer>
)
