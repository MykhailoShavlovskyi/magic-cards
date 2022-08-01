import { Product } from "@prisma/client"
import { ProductsTable as ProductsTableBase } from "../../../components/admin/products/ProductsTable"
import { useMutation } from "@blitzjs/rpc"
import duplicateProduct from "../../../db/products/mutations/duplicateProduct"
import deleteProduct from "../../../db/products/mutations/deleteProduct"

export const ProductsTable = ({ products }: { products: Product[] }) => {
  const [duplicateProductMutation] = useMutation(duplicateProduct)
  const [deleteProductMutation] = useMutation(deleteProduct)
  return (
    <>
      <ProductsTableBase
        products={products}
        onDuplicate={duplicateProductMutation}
        onDelete={deleteProductMutation}
      />
    </>
  )
}
