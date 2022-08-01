import { StoreLayout } from "../../app/layouts/StoreLayout"
import { getCartMessage } from "../../app/localization/common"

const CartPage = () => <StoreLayout title={getCartMessage()}>Cart</StoreLayout>

export default CartPage
