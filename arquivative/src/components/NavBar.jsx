import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-medium tracking-tight">Arquivative</h1>
        <div className="flex space-x-6 text-sm uppercase tracking-widest">
          <Link
            to="/"
            className={`hover:text-neutral-500 transition ${
              location.pathname === "/" ? "text-neutral-900 font-semibold" : "text-neutral-600"
            }`}
          >
            Home
          </Link>

          <Link
            to="/modelos3d"
            className={`hover:text-neutral-500 transition ${
              location.pathname === "/modelos3d" ? "text-neutral-900 font-semibold" : "text-neutral-600"
            }`}
          >
            Modelos 3D
          </Link>
        </div>
      </div>
    </nav>
  );
}
