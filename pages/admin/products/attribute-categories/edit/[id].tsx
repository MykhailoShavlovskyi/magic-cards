import { GetServerSideProps } from "next"
import db from "../../../../../db"
import { AdminLayout } from "../../../../../app/layouts/AdminLayout"
import { AttributeCategory } from "@prisma/client"
import { Breadcrumb } from "../../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { EditAttributeCategoryForm } from "../../../../../app/containers/admin/products/EditAttributeCategoryForm"
import { getEditMessage, getHomeMessage } from "../../../../../app/localization/common"
import {
  getAttributeCategoriesMessage,
  getProductsMessage,
} from "../../../../../app/localization/magic-cards"
import { getEditAttributeCategoryMessage } from "../../../../../app/localization/admin"

const EditAttributeCategoryPage = ({ category }: { category: AttributeCategory }) => (
  <AdminLayout title={getEditAttributeCategoryMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getProductsMessage(), href: Routes.AdminProductsHomePage() },
        { value: getAttributeCategoriesMessage(), href: Routes.AttributeCategoriesPage() },
        { value: getEditMessage() },
      ]}
    />
    <EditAttributeCategoryForm category={category} />
    {JSON.stringify(category)}
  </AdminLayout>
)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id
  if (id == null) throw new Error("Cannot find id in parameters")

  const parsedId = Number(id)
  const categories = await db.attributeCategory.findUnique({ where: { id: parsedId } })
  return { props: { categories } }
}

export default EditAttributeCategoryPage
