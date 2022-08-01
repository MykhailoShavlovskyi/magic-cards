import { GetServerSideProps } from "next"
import db from "../../../db"
import { AdminLayout } from "../../../app/layouts/AdminLayout"
import { Breadcrumb } from "../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { OrdersTable } from "../../../app/containers/admin/orders/OrdersTable"
import { Order } from "@prisma/client"
import { getHomeMessage } from "../../../app/localization/common"
import { getOrdersMessage } from "../../../app/localization/magic-cards"

const OrdersPage = ({ orders }: { orders: Order[] }) => (
  <AdminLayout>
    <Breadcrumb
      items={[
        { value: getHomeMessage(), href: Routes.AdminHomePage() },
        { value: getOrdersMessage() },
      ]}
    />
    <OrdersTable orders={orders} />
  </AdminLayout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const orders = await db.order.findMany({ take: 100 })
  return {
    props: {
      orders: orders.map(({ createdAt, updatedAt, ...v }) => ({
        createdAt: createdAt.toString(),
        updatedAt: updatedAt.toString(),
        ...v,
      })),
    },
  }
}

export default OrdersPage
