import { Form } from "../../common/form/Form"
import { TextFiled } from "../../common/form/TextFiled"
import * as zod from "zod"
import { object } from "zod"
import { Banned } from "@prisma/client"
import { ip } from "../../../db/validation"
import { getCreateMessage, getEditMessage } from "../../../localization/common"
import { getIpMessage } from "../../../localization/admin"

const Schema = object({
  ip,
})
type Values = zod.infer<typeof Schema>

const initialValues: Values = {
  ip: "0.0.0.0",
}

export const BannedForm = ({
  banned,
  onSubmit,
}: {
  banned?: Banned
  onSubmit: (v: Values) => void
}) => {
  const create = banned == null
  const action = create ? getCreateMessage() : getEditMessage()

  const handleSubmit = async (v) => {
    // TODO
    onSubmit(v)
  }

  return (
    <div>
      <h1>{action} banned</h1>
      <Form
        submitText={action}
        schema={Schema}
        initialValues={banned ?? initialValues}
        onSubmit={handleSubmit}
      >
        <TextFiled name="ip" label={getIpMessage()} placeholder={getIpMessage()} />
      </Form>
    </div>
  )
}
