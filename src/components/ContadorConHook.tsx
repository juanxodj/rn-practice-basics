import { useCounter } from "../hooks/useCounter";

export const ContadorConHook = () => {
  const { valor, restar, acumular } = useCounter(10);

  return (
    <>
      <h3>
        Contador con Hook: <small>{valor}</small> <br />
        <button className="btn btn-primary" onClick={() => restar(1)}>
          -1
        </button>
        &nbsp;
        <button className="btn btn-primary" onClick={() => acumular(1)}>
          +1
        </button>
      </h3>
    </>
  );
};
