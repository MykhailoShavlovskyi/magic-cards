import { GetServerSideProps } from "next"
import db from "../../../../../db"
import { AdminLayout } from "../../../../../app/layouts/AdminLayout"
import { ProductCategory } from "@prisma/client"
import { Breadcrumb } from "../../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { EditCategoryForm } from "../../../../../app/containers/admin/products/EditCategoryForm"
import { getEditCategoryMessage, getEditSetMessage } from "../../../../../app/localization/admin"
import { getHomeMessage } from "../../../../../app/localization/common"
import {
  getCategoriesMessage,
  getProductsMessage,
} from "../../../../../app/localization/magic-cards"

const EditCategoryPage = ({ category }: { category: ProductCategory }) => (
  <AdminLayout title={getEditCategoryMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getProductsMessage(), href: Routes.AdminProductsHomePage() },
        { value: getCategoriesMessage(), href: Routes.AdminCategoriesPage() },
        { value: getEditSetMessage() },
      ]}
    />
    <EditCategoryForm category={category} />
  </AdminLayout>
)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id
  if (id == null) throw new Error("Cannot find id in parameters")

  const parsedId = Number(id)
  const category = await db.productCategory.findUnique({ where: { id: parsedId } })
  return { props: { category } }
}

export default EditCategoryPage
