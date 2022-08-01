import { StoreLayout } from "../../app/layouts/StoreLayout"
import { GetServerSideProps } from "next"
import { getProducts, ResolvedProduct } from "../../app/db/products/products.querties"
import { Attribute, ProductCategory, ProductSet } from "@prisma/client"
import db from "../../db"
import { Products } from "../../app/components/store/products/Products"
import { getStoreMessage } from "../../app/localization/store"

const StorePage = (props: {
  products: ResolvedProduct[]
  categories: ProductCategory[]
  sets: ProductSet[]
  attributes: Attribute[]
}) => (
  <StoreLayout title={getStoreMessage()}>
    <Products {...props} />
  </StoreLayout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getProducts()
  const categories = await db.productCategory.findMany()
  const sets = await db.productSet.findMany()
  const attributes = await db.attribute.findMany()

  return { props: { products, categories, sets, attributes } }
}

export default StorePage
