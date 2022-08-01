import { StoreLayout } from "../../app/layouts/StoreLayout"
import { getCheckoutMessage } from "../../app/localization/common"

const CheckoutPage = () => <StoreLayout title={getCheckoutMessage()}>Checkout</StoreLayout>

export default CheckoutPage
