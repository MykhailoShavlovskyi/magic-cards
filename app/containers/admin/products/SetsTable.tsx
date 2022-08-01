import { ProductSet } from "@prisma/client"
import { SetsTable as SetsTableBase } from "../../../components/admin/products/SetsTable"
import { useMutation } from "@blitzjs/rpc"
import duplicateSet from "../../../db/products/mutations/duplicateSet"
import deleteSet from "../../../db/products/mutations/deleteSet"

export const SetsTable = ({ sets }: { sets: ProductSet[] }) => {
  const [duplicateSetMutation] = useMutation(duplicateSet)
  const [deleteSetMutation] = useMutation(deleteSet)
  return (
    <SetsTableBase sets={sets} onDuplicate={duplicateSetMutation} onDelete={deleteSetMutation} />
  )
}
