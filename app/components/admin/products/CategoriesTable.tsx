import { ProductCategory } from "@prisma/client"
import { getNameMessage } from "../../../localization/common"
import { getAreYouSureDeleteCategoryMessage, getIndexMessage } from "../../../localization/admin"
import { Table } from "../../common/Table"

export const CategoriesTable = ({
  categories,
  ...rest
}: {
  categories: ProductCategory[]
  onDuplicate: () => void
  onDelete: (ids: number[]) => void
}) => (
  <Table
    items={categories}
    fields={[
      { value: "name", label: getNameMessage() },
      { value: "index", label: getIndexMessage() },
    ]}
    searchKeys={["name", "index"]}
    deleteMessage={getAreYouSureDeleteCategoryMessage()}
    {...rest}
  />
)
