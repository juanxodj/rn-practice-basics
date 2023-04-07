import { useUsers } from "../hooks/useUsers";
import { User } from "../interfaces/reqRes";

export const Usuarios = () => {
  const { pageRef, users, prevPage, nextPage } = useUsers();

  const renderItem = ({ id, first_name, last_name, email, avatar }: User) => {
    return (
      <tr key={id}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{ width: 30, borderRadius: 100 }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map((user) => renderItem(user))}</tbody>
      </table>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button className="btn btn-primary" onClick={prevPage}>
          Anterior
        </button>
        <button className="btn btn-primary">{pageRef.current}</button>
        <button className="btn btn-primary" onClick={nextPage}>
          Siguiente
        </button>
      </div>
    </>
  );
};
