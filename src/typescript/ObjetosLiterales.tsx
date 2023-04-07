interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: "Juan Sánchez",
    edad: 30,
    direccion: {
      pais: "Perú",
      casaNo: 417,
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
