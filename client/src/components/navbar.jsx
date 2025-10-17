import { Link } from "react-router";
export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm justify-center border-b-2 border-primary gap-4">
        <Link to="/" className="btn btn-primary text-xl">
          Home
        </Link>
        <Link to="/login" className="btn btn-primary text-xl">
          Iniciar sesión
        </Link>
        <Link to="/feed" className="btn btn-primary text-xl">
          Feed
        </Link>
      </div>
    </>
  );
}
