import { useState } from "react";

export const useCounter = (inicial: number) => {
  const [valor, setValor] = useState(inicial);

  const restar = (numero: number) => {
    if (valor !== 0) {
      setValor(valor - numero);
    }
  };

  const acumular = (numero: number) => {
    setValor(valor + numero);
  };

  return { valor, restar, acumular };
};
