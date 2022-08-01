import LinkBase from "next/link"
import { Routes } from "@blitzjs/next"
import { spacing } from "../common/spacing"
import { useRouter } from "next/router"
import { RouteUrlObject } from "blitz"
import styled from "styled-components"
import { getHomeMessage, getSignOutMessage } from "../../localization/common"
import {
  getBannedMessage,
  getCurrenciesMessage,
  getOrdersMessage,
  getProductsMessage,
  getVouchersMessage,
} from "../../localization/magic-cards"
import { getStoreMessage } from "../../localization/store"

const StyledContainer = styled.div`
  padding: ${spacing.s16};
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.2 "\t") 0 3px 8px;
`

const StyledLink = styled.span<{ active: boolean }>`
  a {
    margin-right: ${spacing.s32};
    text-decoration: ${(p) => (p.active ? "underline" : "none")};
    color: black;
    font-weight: bold;
  }
`

const Link = ({
  href,
  value,
  active,
}: {
  href: RouteUrlObject
  value: string
  active: boolean
}) => (
  <StyledLink active={active}>
    <LinkBase href={href}>
      <a>{value}</a>
    </LinkBase>
  </StyledLink>
)

export const AdminNav = ({ onLogOut }: { onLogOut: () => void }) => {
  const pathName = useRouter().pathname
  const products = pathName.includes("/products")
  const orders = pathName.includes("/orders")
  const vouchers = pathName.includes("/vouchers")
  const currencies = pathName.includes("/currencies")
  const banned = pathName.includes("/banned")
  const home = !products && !orders && !vouchers && !currencies && !banned

  return (
    <StyledContainer>
      <span>
        <Link href={Routes.AdminHomePage()} value={getHomeMessage()} active={home} />
        <Link
          href={Routes.AdminProductsHomePage()}
          value={getProductsMessage()}
          active={products}
        />
        <Link href={Routes.OrdersPage()} value={getOrdersMessage()} active={orders} />
        <Link
          href={Routes.AdminVouchersHomePage()}
          value={getVouchersMessage()}
          active={vouchers}
        />
        <Link href={Routes.CurrenciesPage()} value={getCurrenciesMessage()} active={currencies} />
        <Link href={Routes.BannedPage()} value={getBannedMessage()} active={banned} />
      </span>
      <div>
        <Link href={Routes.StoreHomePage()} value={getStoreMessage()} active={banned} />
        <button onClick={onLogOut}>{getSignOutMessage()}</button>
      </div>
    </StyledContainer>
  )
}
