import { ProductForm } from "../../../components/admin/products/ProductForm"
import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import updateProduct from "../../../db/products/mutations/updateProduct"
import { Product } from "@prisma/client"

export const EditProductForm = ({ product }: { product: Product }) => {
  const [updateProductMutation] = useMutation(updateProduct)
  const router = useRouter()
  const onSubmit = (v) => updateProductMutation(v).then(router.reload)

  return <ProductForm product={product} onSubmit={onSubmit} />
}
