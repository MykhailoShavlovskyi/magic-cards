import { Form } from "../../common/form/Form"
import { TextFiled } from "../../common/form/TextFiled"
import * as zod from "zod"
import { Currency } from "@prisma/client"
import { getCreateMessage, getEditMessage, getNameMessage } from "../../../localization/common"
import { getPrimaryMessage, getRateMessage } from "../../../localization/admin"
import { CreateCurrency } from "../../../db/misc/misc.validation"

type Values = zod.infer<typeof CreateCurrency>

const initialValues: Values = {
  name: "New currency",
  primary: false,
  rate: 1,
}

export const CurrencyForm = ({
  currency,
  onSubmit,
}: {
  currency?: Currency
  onSubmit: (v: Values) => void
}) => {
  const create = currency == null
  const action = create ? getCreateMessage() : getEditMessage()

  const handleSubmit = async (v) => {
    // TODO
    onSubmit(v)
  }

  return (
    <div>
      <h1>{action} currency</h1>
      <Form
        submitText={action}
        schema={CreateCurrency}
        initialValues={currency ?? initialValues}
        onSubmit={handleSubmit}
      >
        <TextFiled name="name" label={getNameMessage()} placeholder={getNameMessage()} />
        <TextFiled name="primary" label={getPrimaryMessage()} placeholder={getPrimaryMessage()} />
        <TextFiled name="rate" label={getRateMessage()} placeholder={getRateMessage()} />
      </Form>
    </div>
  )
}
