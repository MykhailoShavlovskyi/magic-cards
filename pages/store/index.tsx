import { StoreLayout } from "../../app/layouts/StoreLayout"
import { getHomeMessage } from "../../app/localization/common"
import { GetServerSideProps } from "next"
import db from "../../db"
import { Product } from "@prisma/client"
import { FeaturedCards } from "../../app/components/store/home/FeaturedCards"

const StoreHomePage = ({
  products,
}: {
  products: Pick<Product, "id" | "name" | "defaultPrice">[]
}) => (
  <StoreLayout title={getHomeMessage()}>
    <FeaturedCards products={products} />
  </StoreLayout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await db.product.findMany({
    /*where: { featured: true },*/
    select: { id: true, name: true, defaultPrice: true },
  })

  return { props: { products } }
}

export default StoreHomePage
