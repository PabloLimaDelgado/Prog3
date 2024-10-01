import { Button, Form } from "react-bootstrap";
import styles from "./Login.module.scss";
import { FormEvent, useState } from "react";
import { useForm } from "../../../hooks/useForm.ts";
import { useAppDispatch } from "../../../hooks/redux.ts";
import { setLogin } from "../../../redux/slices/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { values, handleChange } = useForm({ user: "", password: "" });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/user.json");
    const data = await response.json();

    const userFound = data.users.find(
      (u: { username: string; password: string }) =>
        u.username === values.user && u.password === values.password
    );

    if (userFound) {
      dispatch(setLogin(values.user));
      navigate("/");
    } else {
      alert("Usuario o contraseña no encontrados");
    }
  };

  return (
    <div className={styles.containerLogin}>
      <div className={styles.containerForm}>
        <span
          style={{ fontSize: "10vh" }}
          className="material-symbols-outlined"
        >
          group
        </span>

        <Form onSubmit={handleSubmitForm}>
          <Form.Group className="mb-3">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              name="user"
              type="text"
              placeholder="Usuario"
              onChange={handleChange}
              value={values.user}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="Contraseña"
              onChange={handleChange}
              value={values.password}
            />
          </Form.Group>

          <Form.Check
            type="switch"
            id="custom-switch"
            onChange={() => {
              setShowPass(!showPass);
            }}
            label="Mostrar contraseña"
          />

          <div className="d-flex justify-content-center aling-items-center mt-2">
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
