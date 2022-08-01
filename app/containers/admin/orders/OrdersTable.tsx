import { Order } from "@prisma/client"
import { OrdersTable as OrdersTableBase } from "../../../components/admin/orders/OrdersTable"
import { useRouter } from "next/router"

export const OrdersTable = ({ orders }: { orders: Order[] }) => {
  const router = useRouter()
  const onEdit = (id) => router.push(`${router.pathname}/edit/${id}`)
  const onDelete = () => {} // TODO

  return <OrdersTableBase orders={orders} onDuplicate={onEdit} onDelete={onDelete} />
}
