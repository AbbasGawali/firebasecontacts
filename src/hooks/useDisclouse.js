import React, { useState } from "react";

const useDisclouse = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return { onOpen, onClose, open };
};

export default useDisclouse;
