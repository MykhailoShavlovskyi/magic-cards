import { ProductForm } from "../../../components/admin/products/ProductForm"
import createProduct from "../../../db/products/mutations/createProduct"
import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"

export const CreateProductForm = () => {
  const [createProductMutation] = useMutation(createProduct)
  const router = useRouter()
  const onSubmit = (v) => createProductMutation(v).then(router.reload)

  return <ProductForm onSubmit={onSubmit} />
}
