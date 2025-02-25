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

    const sendPasswordData = {
      currentPassword: password.currentPassword,
      newPassword: password.newPassword,
      id: user.id,
    };

    try {
      await axios.post(
        `${BACKEND_URL}/api/uzytkownicy/change-password`,
        sendPasswordData
      );

      toast.success("Hasło zostało zmienione!");
      setPassword(initialPasswordState);
      setError(null);
      setIsOpen(false); // Teraz modal się zamyka po poprawnej zmianie hasła
    } catch (error) {
      const newError = error?.response?.data?.message || "Błąd serwera!";
      setError(newError);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center">
          <Dialog.Content className="bg-custom-gray p-8 rounded-xl shadow-2xl w-full max-w-md">
            <Dialog.Title className="flex items-center justify-between text-white text-xl font-semibold">
              Zmień hasło
              <Dialog.Close className="text-white hover:text-red-500 transition">
                <IoClose size={28} />
              </Dialog.Close>
            </Dialog.Title>

            <div className="mt-6 space-y-4">
              <input
                name="currentPassword"
                type="password"
                placeholder="Obecne hasło"
                className="w-full p-3 rounded-lg bg-dark-gray text-white outline-none border-2 border-transparent focus:border-custom-orange transition"
                onChange={InputChange}
              />
              <input
                name="newPassword"
                type="password"
                placeholder="Nowe hasło"
                className="w-full p-3 rounded-lg bg-dark-gray text-white outline-none border-2 border-transparent focus:border-custom-orange transition"
                onChange={InputChange}
              />
              <input
                name="repeatedNewPassword"
                type="password"
                placeholder="Powtórz nowe hasło"
                className="w-full p-3 rounded-lg bg-dark-gray text-white outline-none border-2 border-transparent focus:border-custom-orange transition"
                onChange={InputChange}
              />
            </div>

            {error && (
              <p className="text-custom-red text-sm text-center mt-2">
                {error}
              </p>
            )}

            <div className="flex justify-end gap-3 mt-6">
              <Dialog.Close asChild>
                <button className="bg-custom-blue hover:bg-custom-blue-light text-white px-4 py-2 rounded-lg transition">
                  Anuluj
                </button>
              </Dialog.Close>
              <button
                className="bg-gradient-to-r from-custom-orange to-custom-red text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
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
