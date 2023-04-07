export const TiposBasicos = () => {
  const nombre: string | number = "Juanxo";
  const edad: number = 35;
  const estaActivo: boolean = true;

  const poderes: string[] = ["Velocidad", "Volar", "Respirar en el agua"];

  return (
    <>
      <h3>Tipos Básicos</h3>
      {nombre}, de {edad} años esta {estaActivo ? "activo" : "inactivo"}
      <br />
      {poderes.join(", ")}
    </>
  );
};
