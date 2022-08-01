import { Order } from "@prisma/client"
import { getIdMessage } from "../../../localization/common"
import { Table } from "../../common/Table"
import {
  getAddressMessage,
  getAreYouSureDeleteOrderMessage,
  getCommentMessage,
  getCreatedAtMessage,
  getDiscountMessage,
  getEmailMessage,
  getFirstNameMessage,
  getIpMessage,
  getLastNameMessage,
  getPaymentMessage,
  getPhoneMessage,
  getStatusMessage,
  getTelegramMessage,
  getTotalMessage,
  getUpdatedAtMessage,
} from "../../../localization/admin"

export const OrdersTable = ({
  orders,
  ...rest
}: {
  orders: Order[]
  onDuplicate: (id: number) => void
  onDelete: (ids: number[]) => void
}) => (
  <Table
    items={orders}
    fields={[
      { value: "id", label: getIdMessage() },
      { value: "firstName", label: getFirstNameMessage() },
      { value: "lastName", label: getLastNameMessage() },
      { value: "email", label: getEmailMessage() },
      { value: "phone", label: getPhoneMessage() },
      { value: "telegram", label: getTelegramMessage() },
      { value: "address", label: getAddressMessage() },
      { value: "total", label: getTotalMessage() },
      { value: "payment", label: getPaymentMessage() },
      { value: "discount", label: getDiscountMessage() },
      { value: "ip", label: getIpMessage() },
      { value: "comment", label: getCommentMessage() },
      { value: "status", label: getStatusMessage() },
      { value: "createdAt", label: getCreatedAtMessage() },
      { value: "updatedAt", label: getUpdatedAtMessage() },
      // TODO customer
      // TODO currency
    ]}
    searchKeys={[
      "firstName",
      "lastName",
      "email",
      "phone",
      "telegram",
      "address",
      "total",
      "payment",
      "discount",
      "ip",
      "comment",
      "status",
      "createdAt",
      "updatedAt",
    ]}
    deleteMessage={getAreYouSureDeleteOrderMessage()}
    {...rest}
  />
)
