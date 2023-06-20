import { createContext, useContext, useState } from "react";

export const TextContext = createContext();

export function useText() {
  return useContext(TextContext);
}

export function TextProvider({ children }) {
  const [prova, setProva] = useState("prova");

  const value = {
    prova,
    setProva,
  };

  return <TextContext.Provider value={value}>{children}</TextContext.Provider>;
}
