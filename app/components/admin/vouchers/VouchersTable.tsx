import { Voucher } from "@prisma/client"
import { getIdMessage, getNameMessage } from "../../../localization/common"
import {
  getActiveMessage,
  getAmountMessage,
  getAreYouSureDeleteVoucherMessage,
  getCodeMessage,
  getCreatedAtMessage,
  getDiscountMessage,
  getDiscountTypeMessage,
  getEndDateMessage,
  getForRegisteredMessage,
  getMaxUseMessage,
  getMaxUseUserMessage,
  getStartDateMessage,
} from "../../../localization/admin"
import { Table } from "../../common/Table"

export const VouchersTable = ({
  vouchers,
  ...rest
}: {
  vouchers: Voucher[]
  onDuplicate: () => void
  onDelete: (ids: number[]) => void
}) => (
  <Table
    items={vouchers}
    fields={[
      { value: "id", label: getIdMessage() },
      { value: "name", label: getNameMessage() },
      { value: "code", label: getCodeMessage() },
      { value: "discountType", label: getDiscountTypeMessage() },
      { value: "discount", label: getDiscountMessage() },
      { value: "amount", label: getAmountMessage() },
      { value: "forRegistered", label: getForRegisteredMessage() },
      { value: "maxUse", label: getMaxUseMessage() },
      { value: "maxUseUser", label: getMaxUseUserMessage() },
      { value: "startDate", label: getStartDateMessage() },
      { value: "endDate", label: getEndDateMessage() },
      { value: "active", label: getActiveMessage() },
      { value: "createAt", label: getCreatedAtMessage() },
    ]}
    searchKeys={[
      "name",
      "code",
      "discountType",
      "discount",
      "amount",
      "forRegistered",
      "maxUse",
      "maxUseUser",
      "startDate",
      "endDate",
      "active",
      "createAt",
    ]}
    deleteMessage={getAreYouSureDeleteVoucherMessage()}
    {...rest}
  />
)
