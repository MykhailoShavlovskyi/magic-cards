import { AdminLayout } from "../../../../app/layouts/AdminLayout"
import { GetServerSideProps } from "next"
import db from "../../../../db"
import { Breadcrumb } from "../../../../app/components/Breadcrumb"
import { Routes } from "@blitzjs/next"
import { EditOrderForm } from "../../../../app/containers/admin/orders/EditOrderForm"
import { Order } from "@prisma/client"
import { getEditOrderMessage } from "../../../../app/localization/admin"
import { getEditMessage, getHomeMessage } from "../../../../app/localization/common"
import { getOrdersMessage } from "../../../../app/localization/magic-cards"

const EditOrderPage = ({ order }: { order: Order }) => {
  return (
    <AdminLayout title={getEditOrderMessage()}>
      <Breadcrumb
        items={[
          { value: getHomeMessage(), href: Routes.AdminHomePage() },
          { value: getOrdersMessage(), href: Routes.OrdersPage() },
          { value: getEditMessage() },
        ]}
      />
      <EditOrderForm order={order} />
      {JSON.stringify(order)}
    </AdminLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id
  if (id == null) throw new Error("Cannot find id in parameters")

  const parsedId = Number(id)
  const order = await db.order.findUnique({ where: { id: parsedId } })
  return { props: { order } }
}

export default EditOrderPage
