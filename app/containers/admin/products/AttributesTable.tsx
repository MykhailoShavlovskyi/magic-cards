import { AttributesTable as AttributesTableBase } from "../../../components/admin/products/AttributesTable"
import { Attribute } from "@prisma/client"
import { useMutation } from "@blitzjs/rpc"
import duplicateAttribute from "../../../db/products/mutations/duplicateAttribute"
import deleteAttribute from "../../../db/products/mutations/deleteAttribute"

export const AttributesTable = ({ attributes }: { attributes: Attribute[] }) => {
  const [duplicateAttributeMutation] = useMutation(duplicateAttribute)
  const [deleteAttributeMutation] = useMutation(deleteAttribute)
  return (
    <>
      <AttributesTableBase
        attributes={attributes}
        onDuplicate={duplicateAttributeMutation}
        onDelete={deleteAttributeMutation}
      />
    </>
  )
}
