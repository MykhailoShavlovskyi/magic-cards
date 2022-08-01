import { Form } from "../../common/form/Form"
import { TextFiled } from "../../common/form/TextFiled"
import * as zod from "zod"
import { Order, OrderStatus, Payment } from "@prisma/client"
import { getCreateMessage, getEditMessage } from "../../../localization/common"
import { CreateOrder } from "../../../db/orders/orders.validation"
import {
  getAddressMessage,
  getCommentMessage,
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
} from "../../../localization/admin"

type Values = Omit<zod.infer<typeof CreateOrder>, "customerId" | "currencyId" | "voucherId"> & {
  customerId?: number
  currencyId?: number
  voucherId?: number
}

const initialValues: Values = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  telegram: "",
  address: "",
  total: 0,
  payment: Payment.A,
  discount: 0,
  ip: "",
  comment: "",
  status: OrderStatus.A,
  productIds: [],
}

export const OrderForm = ({
  order,
  onSubmit,
}: {
  order?: Order
  onSubmit: (v: Values) => void
}) => {
  const create = order == null
  const action = create ? getCreateMessage() : getEditMessage()

  const handleSubmit = async (v) => {
    // TODO
    onSubmit(v)
  }

  return (
    <div>
      <h1>{action} order</h1>
      <Form
        submitText={action}
        schema={CreateOrder}
        initialValues={order ?? initialValues}
        onSubmit={handleSubmit}
      >
        <TextFiled
          name="firstName"
          label={getFirstNameMessage()}
          placeholder={getFirstNameMessage()}
        />
        <TextFiled
          name="lastName"
          label={getLastNameMessage()}
          placeholder={getLastNameMessage()}
        />
        <TextFiled name="email" label={getEmailMessage()} placeholder={getEmailMessage()} />
        <TextFiled name="phone" label={getPhoneMessage()} placeholder={getPhoneMessage()} />
        <TextFiled
          name="telegram"
          label={getTelegramMessage()}
          placeholder={getTelegramMessage()}
        />
        <TextFiled name="address" label={getAddressMessage()} placeholder={getAddressMessage()} />
        <TextFiled name="total" label={getTotalMessage()} placeholder={getTotalMessage()} />
        <TextFiled name="payment" label={getPaymentMessage()} placeholder={getPaymentMessage()} />
        <TextFiled
          name="discount"
          label={getDiscountMessage()}
          placeholder={getDiscountMessage()}
        />
        <TextFiled name="ip" label={getIpMessage()} placeholder={getIpMessage()} />
        <TextFiled name="comment" label={getCommentMessage()} placeholder={getCommentMessage()} />
        <TextFiled name="status" label={getStatusMessage()} placeholder={getStatusMessage()} />
        {/* // TODO products ids // TODO customer id // TODO currency id // TODO voucher id*/}
      </Form>
    </div>
  )
}
