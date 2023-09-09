// Importing the Link component from react-router-dom library
import { Link } from "react-router-dom";

// Importing the CSS styles for the Header component
import "../css/Header.css";

// Defining and exporting the Header function component

export default function Header() {
  return (
    <header>
      <p className="h3">REACT STOCK</p>

      {/* Creating a navigation menu with class "nav_menu" */}

      <nav className="nav_menu">
        <Link to="/">Home</Link>

        <Link to="/items">Items</Link>
      </nav>
    </header>
  );
}
