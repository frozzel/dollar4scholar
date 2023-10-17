import React, { useState } from "react";
import { updateUserWallet } from "../api/user";
import { useNotification } from "../hooks";
import DonateForm from "../form/DonateForm";
import ModalContainer from "./ModalContainer";


export default function UserWallet({
  visible,
  initialState,
  onSuccess,
  onClose,
}) {
  const [busy, setBusy] = useState(false);

  const { updateNotification } = useNotification();

  const handleSubmit = async (data) => {
    setBusy(true);
    const { error, wallet } = await updateUserWallet(initialState.id, data);
    setBusy(false);
    if (error) return updateNotification("error", error);
    onSuccess(wallet);
    updateNotification("success", "User wallet updated successfully.");
    onClose();
  };

  return (
    <ModalContainer visible={visible} onClose={onClose} ignoreContainer>
      <DonateForm
        onSubmit={!busy ? handleSubmit : null}
        title="Pot Donation"
        btnTitle="Donate"
        busy={busy}
        initialState={initialState}
      />
    </ModalContainer>
  );
}
