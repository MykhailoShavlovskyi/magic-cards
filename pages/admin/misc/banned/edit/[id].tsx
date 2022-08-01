import { GetServerSideProps } from "next"
import db from "../../../../../db"
import { Banned } from "@prisma/client"
import { AdminLayout } from "../../../../../app/layouts/AdminLayout"
import { Breadcrumb } from "../../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { EditBannedForm } from "../../../../../app/containers/admin/misc/EditBannedForm"
import { getEditBannedMessage } from "../../../../../app/localization/admin"
import { getEditMessage, getHomeMessage } from "../../../../../app/localization/common"
import { getBannedMessage } from "../../../../../app/localization/magic-cards"

const EditBannedPage = ({ banned }: { banned: Banned }) => (
  <AdminLayout title={getEditBannedMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getBannedMessage(), href: Routes.BannedPage() },
        { value: getEditMessage() },
      ]}
    />
    <EditBannedForm banned={banned} />
    {JSON.stringify(banned)}
  </AdminLayout>
)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id
  if (id == null) throw new Error("Cannot find id in parameters")

  const parsedId = Number(id)
  const banned = await db.banned.findUnique({ where: { id: parsedId } })
  return { props: { banned } }
}

export default EditBannedPage
