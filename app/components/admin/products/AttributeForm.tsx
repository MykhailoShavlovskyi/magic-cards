import { Form } from "../../common/form/Form"
import { TextFiled } from "../../common/form/TextFiled"
import * as zod from "zod"
import { Attribute } from "@prisma/client"
import { getCreateMessage, getEditMessage, getNameMessage } from "../../../localization/common"
import { CreateAttribute } from "../../../db/products/products.validation"

type Values = Omit<zod.infer<typeof CreateAttribute>, "categoryId"> & { categoryId?: number }

const initialValues: Values = {
  name: "New attribute",
}

export const AttributeForm = ({
  attribute,
  onSubmit,
}: {
  attribute?: Attribute
  onSubmit: (v: Values) => void
}) => {
  const create = attribute == null
  const action = create ? getCreateMessage() : getEditMessage()

  const handleSubmit = async (v) => {
    // TODO
    onSubmit(v)
  }

  return (
    <div>
      <h1>{action} attribute</h1>
      <Form
        submitText={action}
        schema={CreateAttribute}
        initialValues={attribute ?? initialValues}
        onSubmit={handleSubmit}
      >
        <TextFiled name="name" label={getNameMessage()} placeholder={getNameMessage()} />
        {/*// TODO category iD*/}
      </Form>
    </div>
  )
}
