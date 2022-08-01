import { Form } from "../../common/form/Form"
import { TextFiled } from "../../common/form/TextFiled"
import * as zod from "zod"
import { Product } from "@prisma/client"
import { getCreateMessage, getEditMessage, getNameMessage } from "../../../localization/common"
import { CreateProduct } from "../../../db/products/products.validation"
import {
  getActiveMessage,
  getDefaultPriceMessage,
  getDescriptionMessage,
  getHeightMessage,
  getIndexMessage,
  getLengthMessage,
  getRegularPriceMessage,
  getWeightMessage,
  getWholesalePriceMessage,
  getWidthMessage,
} from "../../../localization/admin"

type Values = Omit<zod.infer<typeof CreateProduct>, "categoryId" | "setId" | "thumbnailKey"> & {
  categoryId?: number
  setId?: number
  thumbnailKey?: string
}

const initialValues: Values = {
  isbn: "",
  name: "New product",
  description: "",
  active: false,

  defaultPrice: 0,
  regularPrice: 0,
  wholesalePrice: 0,
  defaultMinimumQuantity: 0,
  regularMinimumQuantity: 0,
  wholesaleMinimumQuantity: 0,

  length: 0,
  width: 0,
  height: 0,
  weight: 0,
  index: 0,

  attributeIds: [],
}

export const ProductForm = ({
  product,
  onSubmit,
}: {
  product?: Product
  onSubmit: (v: Values) => void
}) => {
  const create = product == null
  const action = create ? getCreateMessage() : getEditMessage()

  const handleSubmit = async (v) => {
    // TODO
    onSubmit(v)
  }

  return (
    <div>
      <h1>{action} product</h1>
      <Form
        submitText={action}
        schema={CreateProduct}
        initialValues={product ?? initialValues}
        onSubmit={handleSubmit}
      >
        <TextFiled name="name" label={getNameMessage()} placeholder={getNameMessage()} />
        <TextFiled
          name="description"
          label={getDescriptionMessage()}
          placeholder={getDescriptionMessage()}
        />
        <TextFiled name="active" label={getActiveMessage()} placeholder={getActiveMessage()} />

        <TextFiled
          name="defaultPrice"
          label={getDefaultPriceMessage()}
          placeholder={getDefaultPriceMessage()}
        />
        <TextFiled
          name="regularPrice"
          label={getRegularPriceMessage()}
          placeholder={getRegularPriceMessage()}
        />
        <TextFiled
          name="wholesalePrice"
          label={getWholesalePriceMessage()}
          placeholder={getWholesalePriceMessage()}
        />

        <TextFiled name="length" label={getLengthMessage()} placeholder={getLengthMessage()} />
        <TextFiled name="width" label={getWidthMessage()} placeholder={getWidthMessage()} />
        <TextFiled name="height" label={getHeightMessage()} placeholder={getHeightMessage()} />
        <TextFiled name="weight" label={getWeightMessage()} placeholder={getWeightMessage()} />
        <TextFiled name="index" label={getIndexMessage()} placeholder={getIndexMessage()} />
        {/*// TODO attribute ids // TODO category id // TODO set id*/}
      </Form>
    </div>
  )
}
