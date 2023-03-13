import { useState } from "react";

export default function useToggleValue(value) {
  const [acceptTerm, setAcceptTerm] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);
  const handleToggleTerm = () => {
    setAcceptTerm(!acceptTerm);
  };
}
