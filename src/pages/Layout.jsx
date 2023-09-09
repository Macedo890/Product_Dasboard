import { Link, Outlet } from "react-router-dom";

export default function Layuot() {
  return (
    <main>
      <p className="display-4">Stock items</p>

      <Link>Criar item</Link>
      <Link>Atualizar item</Link>

      <Outlet />
    </main>
  );
}
