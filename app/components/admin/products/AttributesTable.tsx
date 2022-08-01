import { Attribute } from "@prisma/client"
import { getNameMessage } from "../../../localization/common"
import {
  getAreYouSureDeleteAttributeMessage,
  getAreYouSureDeleteOrderMessage,
  getIndexMessage,
} from "../../../localization/admin"
import { Table } from "../../common/Table"

export const AttributesTable = ({
  attributes,
  ...rest
}: {
  attributes: Attribute[]
  onDuplicate: (id: number) => void
  onDelete: (ids: number[]) => void
}) => (
  <Table
    items={attributes}
    fields={[
      { value: "name", label: getNameMessage() },
      // TODO category ID
    ]}
    searchKeys={["name"]}
    deleteMessage={getAreYouSureDeleteAttributeMessage()}
    {...rest}
  />
)
