import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import useInputChange from "../../hooks/useInputChange";
import { useUserStore } from "../../store/useUserStore";
import axios from "axios";
import { toast } from "react-toastify";

const ChangePasswordModal = ({ children }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const initialPasswordState = {
    currentPassword: "",
    newPassword: "",
    repeatedNewPassword: "",
  };

  const { user } = useUserStore();
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState(initialPasswordState);
  const [error, setError] = useState(null);
  const { InputChange } = useInputChange(setPassword);

  const handleChangePassword = async () => {
    if (password.newPassword !== password.repeatedNewPassword) {
      setError("Nowe hasła nie są identyczne!");
      return;
    }

    try {
      await axios.post(`${BACKEND_URL}/api/uzytkownicy/change-password`, {
        currentPassword: password.currentPassword,
        newPassword: password.newPassword,
        id: user.id,
      });

      toast.success("Hasło zostało zmienione!");
      setPassword(initialPasswordState);
      setError(null);
      setIsOpen(false);
    } catch (error) {
      setError(error?.response?.data?.message || "Błąd serwera!");
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay">
          <Dialog.Content className="modal-content">
            <div className="modal-header">
              <p>Zmień hasło</p>
              <Dialog.Close className="modal-close">
                <IoClose size={28} />
              </Dialog.Close>
            </div>

            <div className="mt-6 space-y-4">
              <input
                name="currentPassword"
                type="password"
                placeholder="Obecne hasło"
                className="modal-input"
                onChange={InputChange}
              />
              <input
                name="newPassword"
                type="password"
                placeholder="Nowe hasło"
                className="modal-input"
                onChange={InputChange}
              />
              <input
                name="repeatedNewPassword"
                type="password"
                placeholder="Powtórz nowe hasło"
                className="modal-input"
                onChange={InputChange}
              />
            </div>

            {error && (
              <p className="text-custom-red text-sm text-center mt-2">
                {error}
              </p>
            )}

            <div className="modal-actions">
              <Dialog.Close asChild>
                <button className="button bg-custom-blue hover:bg-custom-blue-light">
                  Anuluj
                </button>
              </Dialog.Close>
              <button
                className="button bg-custom-orange"
                onClick={handleChangePassword}
              >
                Zmień
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ChangePasswordModal;
