import { Form } from "../../common/form/Form"
import { TextFiled } from "../../common/form/TextFiled"
import * as zod from "zod"
import { object } from "zod"
import { VoucherHistory } from "db"
import { getCreateMessage, getEditMessage } from "../../../localization/common"

const Schema = object({
  //
})
type Values = zod.infer<typeof Schema>

const initialValues: Values = {
  //
}

export const VoucherHistoryForm = ({
  history,
  onSubmit,
}: {
  history?: VoucherHistory
  onSubmit: (v: Values) => void
}) => {
  const create = history == null
  const action = create ? getCreateMessage() : getEditMessage()

  const handleSubmit = async (v) => {
    //
    onSubmit(v)
  }

  return (
    <div>
      <h1>{action} voucher history</h1>
      <Form
        submitText={action}
        schema={Schema}
        initialValues={history ?? initialValues}
        onSubmit={handleSubmit}
      >
        <TextFiled name="name" label="Name" placeholder="Name" />
      </Form>
    </div>
  )
}
