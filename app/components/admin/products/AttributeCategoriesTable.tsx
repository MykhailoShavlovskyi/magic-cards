import { AttributeCategory } from "@prisma/client"
import { Table } from "../../common/Table"
import { getNameMessage } from "../../../localization/common"
import {
  getAreYouSureDeleteAttributeCategoryMessage,
  getAreYouSureDeleteOrderMessage,
  getIndexMessage,
} from "../../../localization/admin"

export const AttributeCategoriesTable = ({
  categories,
  ...rest
}: {
  categories: AttributeCategory[]
  onDuplicate: (id: number) => void
  onDelete: (ids: number[]) => void
}) => (
  <Table
    items={categories}
    fields={[
      { value: "name", label: getNameMessage() },
      { value: "index", label: getIndexMessage() },
    ]}
    searchKeys={["name", "index"]}
    deleteMessage={getAreYouSureDeleteAttributeCategoryMessage()}
    {...rest}
  />
)
