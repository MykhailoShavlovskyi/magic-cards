export function getAuthErrorMessage() {
  return "Sorry, credentials are invalid"
}

export function getFormErrorMessage(error: string) {
  return `Sorry, we had an unexpected error. Please try again. - ${error}`
}

export function getForgotPasswordMessage() {
  return "Forgot Your Password?"
}
