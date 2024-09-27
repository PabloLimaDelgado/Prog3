import { ChangeEvent, useState } from "react";

interface Props {
  [key: string]: string  | number;
}

export const useForm = <T extends Props>(initialValue: T) => {
  const [values, setValues] = useState<T>(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const { value, name } = event.target;

    setValues({ ...values, [`${name}`]: value });
  };

  const resetForm = () => {
    setValues(initialValue);
  };
  return {
    values,
    handleChange,
    resetForm
  };
};
