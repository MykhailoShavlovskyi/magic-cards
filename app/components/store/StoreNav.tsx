import styled from "styled-components"
import { spacing } from "../common/spacing"
import { RouteUrlObject } from "blitz"
import LinkBase from "next/link"
import { useRouter } from "next/router"
import { Routes } from "@blitzjs/next"
import { getCartMessage, getHomeMessage, getSignOutMessage } from "../../localization/common"
import { getProductsMessage } from "../../localization/magic-cards"
import ProfilePage from "../../../pages/store/profile"

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

export const StoreNav = ({ onLogOut }: { onLogOut: () => void }) => {
  const pathName = useRouter().pathname
  const products = pathName.includes("/products")
  const cart = pathName.includes("/cart")
  const profile = pathName.includes("/profile")
  const home = !products && !cart && !profile

  return (
    <StyledContainer>
      <span>
        <Link href={Routes.StoreHomePage()} value={getHomeMessage()} active={home} />
        <Link href={Routes.StorePage()} value={getProductsMessage()} active={products} />
      </span>
      <div>
        <Link href={Routes.CartPage()} value={getCartMessage()} active={cart} />
        <Link href={Routes.ProfilePage()} value={"Profile TODO"} active={profile} />
        <button onClick={onLogOut}>{getSignOutMessage()}</button>
      </div>
    </StyledContainer>
  )
}
