import { useState, useRef, useEffect } from "react";
import { User, ReqRespList } from "../interfaces/reqRes";
import { api } from "../api/api";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const pageRef = useRef(1);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const resp = await api.get<ReqRespList>("/users", {
      params: {
        page: pageRef.current,
      },
    });
    setUsers(resp.data.data);
  };

  const prevPage = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      getUsers();
    }
  };

  const nextPage = () => {
    pageRef.current++;
    getUsers();
  };

  return { pageRef, users, prevPage, nextPage };
};
