import { Banned } from "@prisma/client"
import { BannedTable as BannedTableBase } from "../../../components/admin/misc/BannedTable"
import { useMutation } from "@blitzjs/rpc"
import duplicateBanned from "../../../db/misc/mutations/duplicateBanned"
import deleteBanned from "../../../db/misc/mutations/deleteBanned"

export const BannedTable = ({ banned }: { banned: Banned[] }) => {
  const [duplicateBannedMutation] = useMutation(duplicateBanned)
  const [deleteBannedMutation] = useMutation(deleteBanned)
  return (
    <>
      <BannedTableBase
        banned={banned}
        onDuplicate={duplicateBannedMutation}
        onDelete={deleteBannedMutation}
      />
    </>
  )
}
