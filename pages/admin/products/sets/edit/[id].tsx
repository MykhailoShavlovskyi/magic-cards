import { GetServerSideProps } from "next"
import db from "../../../../../db"
import { AdminLayout } from "../../../../../app/layouts/AdminLayout"
import { ProductSet } from "@prisma/client"
import { Breadcrumb } from "../../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { EditSetForm } from "../../../../../app/containers/admin/products/EditSetForm"
import { getEditSetMessage } from "../../../../../app/localization/admin"
import { getHomeMessage } from "../../../../../app/localization/common"
import { getProductsMessage, getSetsMessage } from "../../../../../app/localization/magic-cards"

const EditSetPage = ({ set }: { set: ProductSet }) => (
  <AdminLayout title={getEditSetMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getProductsMessage(), href: Routes.AdminProductsHomePage() },
        { value: getSetsMessage(), href: Routes.SetsPage() },
        { value: getEditSetMessage() },
      ]}
    />
    <EditSetForm set={set} />
  </AdminLayout>
)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id
  if (id == null) throw new Error("Cannot find id in parameters")

  const parsedId = Number(id)
  const set = await db.productSet.findUnique({ where: { id: parsedId } })
  return { props: { set } }
}

export default EditSetPage
