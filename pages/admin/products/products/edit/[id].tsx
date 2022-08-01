import { GetServerSideProps } from "next"
import db from "../../../../../db"
import { AdminLayout } from "../../../../../app/layouts/AdminLayout"
import { Product } from "@prisma/client"
import { EditProductForm } from "../../../../../app/containers/admin/products/EditProductForm"
import { Routes } from "@blitzjs/next"
import { Breadcrumb } from "../../../../../app/components/Breadcrumb"
import { getEditProductMessage } from "../../../../../app/localization/admin"
import { getEditMessage, getHomeMessage } from "../../../../../app/localization/common"
import { getProductsMessage } from "../../../../../app/localization/magic-cards"

const EditProductPage = ({ product }: { product: Product }) => (
  <AdminLayout title={getEditProductMessage()}>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getProductsMessage(), href: Routes.AdminProductsHomePage() },
        { value: getProductsMessage(), href: Routes.AdminProductsPage() },
        { value: getEditMessage() },
      ]}
    />
    <EditProductForm product={product} />
    {JSON.stringify(product)}
  </AdminLayout>
)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id
  if (id == null) throw new Error("Cannot find id in parameters")

  const parsedId = Number(id)
  const product = await db.product.findUnique({ where: { id: parsedId } })
  return { props: { product } }
}

export default EditProductPage
