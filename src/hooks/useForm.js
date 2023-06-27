import { useState } from "react";
// dichiarare l'hook useForm
export default function useForm(initialState) {
  // stato (i dati del mio form)
  const [values, setValues] = useState(initialState);
  // funzione change  -> modificare lo stato
  function handleChange(target) {
    setValues({
      ...values,
      [target.id]: target.value,
    });
  }
  // funzione reset del form
  function resetForm() {
    setValues(initialState);
  }
  // esportare le funzionalità dell'hook
  return [values, handleChange, resetForm, setValues];
}
