import * as Dialog from "@radix-ui/react-dialog";

const CheckAgreementModal = ({ children, text, btnText, func }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay">
          <Dialog.Content className="modal-content">
            <Dialog.Title>
              <p className="text-xl font-semibold mb-5">{text}</p>
            </Dialog.Title>

            <div className="w-full flex justify-end items-center gap-4">
              <Dialog.Description>
                {/* Opis modalnego okna (jeśli potrzebny) */}
              </Dialog.Description>

              <button
                className="button bg-red-500 hover:bg-red-400 text-white hover:border-red-400"
                onClick={func}
              >
                {btnText}
              </button>
              <Dialog.Close>
                <div className="button bg-custom-blue hover:bg-custom-blue-light text-white">
                  Cancel
                </div>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CheckAgreementModal;
