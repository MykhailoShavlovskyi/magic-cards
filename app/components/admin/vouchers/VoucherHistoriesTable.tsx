import { VoucherHistory } from "@prisma/client"
import { Table } from "../../common/Table"
import { getIdMessage } from "../../../localization/common"
import {
  getAmountMessage,
  getAreYouSureDeleteVoucherHistoryMessage,
  getCreatedAtMessage,
} from "../../../localization/admin"

export const VoucherHistoriesTable = ({
  histories,
  ...rest
}: {
  histories: VoucherHistory[]
  onDuplicate: () => void
  onDelete: (ids: number[]) => void
}) => (
  <Table
    items={histories}
    fields={[
      { value: "id", label: getIdMessage() },
      { value: "amount", label: getAmountMessage() },
      { value: "createdAt", label: getCreatedAtMessage() },
      // TODO voucher id
      // TODO order id
    ]}
    searchKeys={["name"]}
    deleteMessage={getAreYouSureDeleteVoucherHistoryMessage()}
    {...rest}
  />
)
