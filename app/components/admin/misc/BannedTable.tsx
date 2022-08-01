import { Banned } from "@prisma/client"
import { getIdMessage } from "../../../localization/common"
import { Table } from "../../common/Table"
import { getAreYouSureDeleteBannedMessage, getIpMessage } from "../../../localization/admin"

export const BannedTable = ({
  banned,
  ...rest
}: {
  banned: Banned[]
  onDuplicate: (id: number) => void
  onDelete: (ids: number[]) => void
}) => (
  <Table
    items={banned}
    fields={[
      { value: "id", label: getIdMessage() },
      { value: "ip", label: getIpMessage() },
    ]}
    searchKeys={["ip"]}
    deleteMessage={getAreYouSureDeleteBannedMessage()}
    {...rest}
  />
)
