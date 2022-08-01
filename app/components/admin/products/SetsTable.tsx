import { ProductSet } from "@prisma/client"
import { Pre } from "../../common/Pre"
import { getNameMessage } from "../../../localization/common"
import {
  getAreYouSureDeleteAttributeCategoryMessage,
  getAreYouSureDeleteSetMessage,
  getIndexMessage,
} from "../../../localization/admin"
import { Table } from "../../common/Table"

export const SetsTable = ({
  sets,
  ...rest
}: {
  sets: ProductSet[]
  onDuplicate: () => void
  onDelete: (ids: number[]) => void
}) => (
  <Table
    items={sets}
    fields={[
      { value: "name", label: getNameMessage() },
      { value: "index", label: getIndexMessage() },
    ]}
    searchKeys={["name", "index"]}
    deleteMessage={getAreYouSureDeleteSetMessage()}
    {...rest}
  />
)
