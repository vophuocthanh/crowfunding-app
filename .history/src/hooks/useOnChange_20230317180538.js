import { debounce } from "lodash";
import { useState } from "react";

export default function useOnChange(time) {
  const [value, setValue] = useState(null);
  const handleOnChange = debounce((e) => {
    setValue(e.target.value);
  });
  return [value, handleOnChange];
}
