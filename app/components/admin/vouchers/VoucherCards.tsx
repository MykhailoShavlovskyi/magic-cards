import styled from "styled-components"
import { Routes } from "@blitzjs/next"
import { LinkCard } from "../../common/card/LinkCard"
import { getHistoryMessage, getVouchersMessage } from "../../../localization/magic-cards"
import { getHomeMessage } from "../../../localization/common"

const StyledContainer = styled.div`
  display: flex;
`

export const VoucherCards = () => (
  <StyledContainer>
    <LinkCard href={Routes.AdminHomePage()} value={getHomeMessage()} />
    <LinkCard href={Routes.VouchersPage()} value={getVouchersMessage()} />
    <LinkCard href={Routes.VoucherHistoriesPage()} value={getHistoryMessage()} />
  </StyledContainer>
)
