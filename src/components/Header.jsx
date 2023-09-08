import "../css/Header.css";

export default function Header() {
  return (
    <header>
      <h3>REACT STOCK</h3>

      <nav>
        <ul className="nav_menu">
          <li>Inicio</li>
          <li>Itens</li>
        </ul>
      </nav>
    </header>
  );
}
