import { GetServerSideProps } from "next"
import { AdminLayout } from "../../../../app/layouts/AdminLayout"
import { Product } from "@prisma/client"
import { ProductsTable } from "../../../../app/containers/admin/products/ProductsTable"
import { Breadcrumb } from "../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { getHomeMessage } from "../../../../app/localization/common"
import { getProductsMessage } from "../../../../app/localization/magic-cards"
import { getProducts } from "../../../../app/db/products/products.querties"

const AdminProductsPage = ({ products }: { products: Product[] }) => (
  <AdminLayout>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getProductsMessage(), href: Routes.AdminProductsHomePage() },
        { value: getProductsMessage() },
      ]}
    />
    <ProductsTable products={products} />
  </AdminLayout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: { products: await getProducts() } }
}

export default AdminProductsPage
