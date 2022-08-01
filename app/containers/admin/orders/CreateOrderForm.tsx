import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import createOrder from "../../../db/orders/mutations/createOrder"
import { OrderForm } from "../../../components/admin/orders/OrderForm"

export const CreateOrderForm = () => {
  const [createOrderMutation] = useMutation(createOrder)
  const router = useRouter()
  const onSubmit = (v) => createOrderMutation(v).then(router.reload)

  return <OrderForm onSubmit={onSubmit} />
}
