import { AuthorizationError } from "blitz"
import { FORM_ERROR } from "./common/form/Form"
import { getAuthErrorMessage, getFormErrorMessage } from "../localization/shared"

export function handleSubmitForm(onSubmit: (v) => void, values) {
  try {
    onSubmit(values)
  } catch (error: any) {
    if (error instanceof AuthorizationError) {
      return { [FORM_ERROR]: getAuthErrorMessage() }
    } else {
      return { [FORM_ERROR]: getFormErrorMessage(error.toString()) }
    }
  }
}
