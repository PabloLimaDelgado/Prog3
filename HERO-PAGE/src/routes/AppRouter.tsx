import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../components/screens/login/Login.tsx";
import { useAppSelector } from "../hooks/redux.ts";
import { ProtectedRoutes } from "./ProtectedRoutes.tsx";

export const AppRouter = () => {
  const isLogged = useAppSelector((state) => state.auth.isLoged);

  return (
    <>
      <Routes>
        {isLogged ? (
          <Route path="/*" element={<ProtectedRoutes />} />
        ) : (
          <Route path="/*" element={<Navigate to={"/login"} />} />
        )}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
