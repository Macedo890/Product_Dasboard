import { Outlet } from "react-router-dom";

import Header from "../components/Header.jsx";

export default function Rootlayout() {
  return (
    <>
      <Header />

      <Outlet />

      <footer>
        <p>Feito com React e React Router</p>
      </footer>
    </>
  );
}
