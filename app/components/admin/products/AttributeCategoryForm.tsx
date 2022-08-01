import { Form } from "../../common/form/Form"
import { TextFiled } from "../../common/form/TextFiled"
import * as zod from "zod"
import { AttributeCategory } from "@prisma/client"
import { getCreateMessage, getEditMessage, getNameMessage } from "../../../localization/common"
import { CreateAttributeCategory } from "../../../db/products/products.validation"
import { getIndexMessage } from "../../../localization/admin"

type Values = zod.infer<typeof CreateAttributeCategory>

const initialValues: Values = {
  name: "New attribute category",
  index: 0,
}

export const AttributeCategoryForm = ({
  category,
  onSubmit,
}: {
  category?: AttributeCategory
  onSubmit: (v: Values) => void
}) => {
  const create = category == null
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
        schema={CreateAttributeCategory}
        initialValues={category ?? initialValues}
        onSubmit={handleSubmit}
      >
        <TextFiled name="name" label={getNameMessage()} placeholder={getNameMessage()} />
        <TextFiled name="index" label={getIndexMessage()} placeholder={getIndexMessage()} />
      </Form>
    </div>
  )
}
