import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import useInputChange from "../../hooks/useInputChange";

import axios from "axios";
import { toast } from "react-toastify";

const ChangePasswordModal = ({ children }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const initialPasswordState = {
    currentPassword: "",
    newPassword: "",
    repeatedNewPassword: "",
  };

  const [password, setPassword] = useState(initialPasswordState);
  const { InputChange } = useInputChange(setPassword);

  const handleChangePassword = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/urzytkownicy/change-password`,
        password
      );
      toast.success("Hasło zmienione poprawnie!");
      console.log(response);
    } catch (error) {
      console.log("error during add raport: ", error);
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay">
          <Dialog.Content className="modal-content">
            <Dialog.Title className="flex items-center justify-between mb-10">
              <p className="text-xl font-semibold">Zmień hasło</p>
              <Dialog.Close>
                <IoClose size={28} />
              </Dialog.Close>
            </Dialog.Title>

            <div className="w-full flex justify-end items-center gap-4">
              <Dialog.Description>
                {/* Opis modalnego okna (jeśli potrzebny) */}
              </Dialog.Description>

              <div className="flex flex-col ">
                <input
                  name="currentPassword"
                  type="text"
                  placeholder="obecne haslo"
                  onChange={InputChange}
                />
                <input
                  name="newPassword"
                  type="text"
                  placeholder="nowe haslo"
                  onChange={InputChange}
                />
                <input
                  name="repeatedNewPassword"
                  type="text"
                  placeholder="powtorzone nowe haslo "
                  onChange={InputChange}
                />
              </div>

              <button
                className="button bg-red-500 hover:bg-red-400 text-white hover:border-red-400"
                onClick={handleChangePassword}
              >
                Zmień
              </button>
              <Dialog.Close>
                <div className="button bg-custom-blue hover:bg-custom-blue-light text-white">
                  Anuluj
                </div>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ChangePasswordModal;
