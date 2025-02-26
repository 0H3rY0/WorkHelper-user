import * as Dialog from "@radix-ui/react-dialog";
import { IoClose } from "react-icons/io5";

const CheckAgreementModal = ({ children, text, btnText, func }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay">
          <Dialog.Content className="modal-content">
            {/* === Nagłówek === */}
            <div className="modal-header">
              <p>{text}</p>
              <Dialog.Close className="modal-close">
                <IoClose size={28} />
              </Dialog.Close>
            </div>

            {/* === Przyciski akcji === */}
            <div className="modal-actions">
              <Dialog.Close asChild>
                <button className="button bg-custom-blue hover:bg-custom-blue-light">
                  Anuluj
                </button>
              </Dialog.Close>
              <button className="button bg-custom-orange" onClick={func}>
                {btnText}
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CheckAgreementModal;
