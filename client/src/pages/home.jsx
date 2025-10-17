import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Bienvenido</h1>
            <p className="py-6">
              Conecta, comparte y descubre un mundo de posibilidades. Únete a la
              comunidad donde cada historia importa y cada conexión cuenta.
            </p>
            <Link to="/login" className="btn btn-primary get-started-button">
              Empezar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
