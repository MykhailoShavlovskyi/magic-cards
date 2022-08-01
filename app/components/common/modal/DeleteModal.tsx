import { Modal } from "./Modal"
import { getCancelMessage, getDeleteMessage } from "../../../localization/common"

export const DeleteModal = ({
  heading,
  onDelete,
  onCancel,
}: {
  heading: string
  onDelete: () => void
  onCancel: () => void
}) => (
  <Modal>
    <h2>{heading}</h2>
    <button onClick={onDelete}>{getDeleteMessage()}</button>
    <button onClick={onCancel}>{getCancelMessage()}</button>
  </Modal>
)
