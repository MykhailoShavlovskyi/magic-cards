import { GetServerSideProps } from "next"
import db, { Attribute } from "../../../../db"
import { AdminLayout } from "../../../../app/layouts/AdminLayout"
import { Breadcrumb } from "../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { AttributesTable } from "../../../../app/containers/admin/products/AttributesTable"
import { getHomeMessage } from "../../../../app/localization/common"
import { getAttributesMessage, getProductsMessage } from "../../../../app/localization/magic-cards"

const AttributesPage = ({ attributes }: { attributes: Attribute[] }) => (
  <AdminLayout>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getProductsMessage(), href: Routes.AdminProductsHomePage() },
        { value: getAttributesMessage() },
      ]}
    />
    <AttributesTable attributes={attributes} />
  </AdminLayout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const attributes = await db.attribute.findMany({ take: 100 })
  return { props: { attributes } }
}

export default AttributesPage
