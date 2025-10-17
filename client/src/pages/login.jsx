import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  EMAIL_PATTERN,
  VALIDATION_ERRORS,
  emptyCredentials,
} from "../constants/constants.js";
export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(emptyCredentials);
  const [errors, setErrors] = useState(VALIDATION_ERRORS);
  function handleLogin(e) {
    setErrors(VALIDATION_ERRORS);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const validCredentials = {
      email: "abc@gmail.com",
      password: "abc123.,",
    };

    if (formData.email.trim() === "" || formData.password.trim() === "") {
      setErrors({ ...errors, emptyCredentials: true });
      return;
    }

    if (!EMAIL_PATTERN.test(formData.email)) {
      setErrors({ ...errors, invalidEmail: true });
      return;
    }

    if (formData.password.length < 8) {
      setErrors({ ...errors, invalidPasswordLength: true });
      return;
    }

    if (
      formData.email !== validCredentials.email ||
      formData.password !== validCredentials.password
    ) {
      setErrors({ ...errors, invalidCredentials: true });
      return;
    }

    navigate("/feed");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl border-2 border-primary">
        <form onSubmit={handleSubmit}>
          <div className="card-body">
            <h2 className="card-title justify-center text-2xl mb-4">
              Iniciar Sesión
            </h2>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                className="input input-bordered input-primary email-input"
                value={formData.email}
                onChange={handleLogin}
              />
              {errors.invalidEmail && (
                <div className="bg-error text-error-content rounded-lg p-2 mt-2 text-center">
                  <span className="text-sm font-bold">
                    Debes ingresar un email valido
                  </span>
                </div>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Contraseña</span>
              </label>
              <input
                name="password"
                type="password"
                className="input input-bordered input-primary password-input"
                value={formData.password}
                onChange={handleLogin}
              />
              {errors.invalidPasswordLength && (
                <div className="bg-error text-error-content rounded-lg p-2 mt-2 text-center">
                  <span className="text-sm font-bold">
                    La contraseña debe ser de almenos 8 carácteres
                  </span>
                </div>
              )}
            </div>

            <div className="form-control mt-6 flex flex-col justify-center ">
              <button className="btn btn-primary login-button" type="submit">
                Iniciar Sesión
              </button>
              {errors.emptyCredentials && (
                <div className="bg-error text-error-content rounded-lg p-2 mt-2 text-center">
                  <span className="text-accent font-bold">
                    Debes completar las credenciales
                  </span>
                </div>
              )}
              {errors.invalidCredentials && (
                <div className="bg-error text-error-content rounded-lg p-2 mt-2 text-center">
                  <span className="text-sm font-bold">
                    Email o contraseña invalida
                  </span>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
