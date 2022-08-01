import styled from "styled-components"
import { Routes } from "@blitzjs/next"
import { LinkCard } from "../common/card/LinkCard"
import {
  getBannedMessage,
  getCurrenciesMessage,
  getOrdersMessage,
  getProductsMessage,
  getVouchersMessage,
} from "../../localization/magic-cards"

const StyledContainer = styled.div`
  display: flex;
`

export const AdminCards = () => (
  <StyledContainer>
    <LinkCard href={Routes.AdminProductsHomePage()} value={getProductsMessage()} />
    <LinkCard href={Routes.OrdersPage()} value={getOrdersMessage()} />
    <LinkCard href={Routes.AdminVouchersHomePage()} value={getVouchersMessage()} />
    <LinkCard href={Routes.CurrenciesPage()} value={getCurrenciesMessage()} />
    <LinkCard href={Routes.BannedPage()} value={getBannedMessage()} />
  </StyledContainer>
)
