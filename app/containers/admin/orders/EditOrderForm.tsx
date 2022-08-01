import { useMutation } from "@blitzjs/rpc"
import { useRouter } from "next/router"
import updateOrder from "../../../db/orders/mutations/updateOrder"
import { OrderForm } from "../../../components/admin/orders/OrderForm"
import { Order } from "@prisma/client"

export const EditOrderForm = ({ order }: { order: Order }) => {
  const [updateOrderMutation] = useMutation(updateOrder)
  const router = useRouter()
  const onSubmit = (v) => updateOrderMutation(v).then(router.reload)

  return <OrderForm order={order} onSubmit={onSubmit} />
}
