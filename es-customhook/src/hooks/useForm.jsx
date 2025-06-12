import { useState } from "react";

function useForm(initialValues = { username: "", password: "" }) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return { values, handleChange };
}

export default useForm;
