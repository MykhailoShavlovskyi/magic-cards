import { Form } from "../../common/form/Form"
import { TextFiled } from "../../common/form/TextFiled"
import * as zod from "zod"
import { ProductSet } from "@prisma/client"
import { getCreateMessage, getEditMessage, getNameMessage } from "../../../localization/common"
import { CreateProductSet } from "../../../db/products/products.validation"
import { getIndexMessage } from "../../../localization/admin"

type Values = zod.infer<typeof CreateProductSet>

const initialValues: Values = {
  name: "New set",
  index: 0,
}

export const SetForm = ({ set, onSubmit }: { set?: ProductSet; onSubmit: (v: Values) => void }) => {
  const create = set == null
  const action = create ? getCreateMessage() : getEditMessage()

  const handleSubmit = async (v) => {
    // TODO
    onSubmit(v)
  }

  return (
    <div>
      <h1>{action} set</h1>
      <Form
        submitText={action}
        schema={CreateProductSet}
        initialValues={set ?? initialValues}
        onSubmit={handleSubmit}
      >
        <TextFiled name="name" label={getNameMessage()} placeholder={getNameMessage()} />
        <TextFiled name="index" label={getIndexMessage()} placeholder={getIndexMessage()} />
      </Form>
    </div>
  )
}
