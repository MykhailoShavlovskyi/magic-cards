import { Form } from "../../common/form/Form"
import { TextFiled } from "../../common/form/TextFiled"
import * as zod from "zod"
import { ProductCategory } from "@prisma/client"
import { getCreateMessage, getEditMessage, getNameMessage } from "../../../localization/common"
import { CreateProductCategory } from "../../../db/products/products.validation"
import { getIndexMessage } from "../../../localization/admin"

type Values = zod.infer<typeof CreateProductCategory>

const initialValues: Values = {
  name: "New category",
  index: 0,
}

export const CategoryForm = ({
  category,
  onSubmit,
}: {
  category?: ProductCategory
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
      <h1>{action} product category</h1>
      <Form
        submitText={action}
        schema={CreateProductCategory}
        initialValues={category ?? initialValues}
        onSubmit={handleSubmit}
      >
        <TextFiled name="name" label={getNameMessage()} placeholder={getNameMessage()} />
        <TextFiled name="index" label={getIndexMessage()} placeholder={getIndexMessage()} />
      </Form>
    </div>
  )
}
