import { useState } from "react";

export default function useOnChange() {
  const [value, setValue] = useState(null);
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  return [value, handleOnChange];
}
