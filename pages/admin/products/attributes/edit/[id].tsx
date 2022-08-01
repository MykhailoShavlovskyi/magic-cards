import { GetServerSideProps } from "next"
import db, { Attribute } from "../../../../../db"
import { AdminLayout } from "../../../../../app/layouts/AdminLayout"
import { Breadcrumb } from "../../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { EditAttributeForm } from "../../../../../app/containers/admin/products/EditAttributeForm"
import { getEditAttributeMessage } from "../../../../../app/localization/admin"
import { getEditMessage, getHomeMessage } from "../../../../../app/localization/common"
import { getProductsMessage } from "../../../../../app/localization/magic-cards"

const EditAttributePage = ({ attribute }: { attribute: Attribute }) => (
  <AdminLayout title={getEditAttributeMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getProductsMessage(), href: Routes.AdminProductsHomePage() },
        { value: getProductsMessage(), href: Routes.AdminProductsPage() },
        { value: getEditMessage() },
      ]}
    />
    <EditAttributeForm attribute={attribute} />
    {JSON.stringify(attribute)}
  </AdminLayout>
)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id
  if (id == null) throw new Error("Cannot find id in parameters")

  const parsedId = Number(id)
  const attribute = await db.attribute.findUnique({ where: { id: parsedId } })
  return { props: { attribute } }
}

export default EditAttributePage
