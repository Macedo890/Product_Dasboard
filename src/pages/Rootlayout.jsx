// Importing the Outlet component from react-router-dom library
import { Outlet } from "react-router-dom";

// Importing the Header and Footer component from the local file
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

// Defining and exporting the Rootlayout function component
export default function Rootlayout() {
  return (
    // Using a React fragment to group multiple elements
    <>
      {/* Rendering the Header component */}
      <Header />
      {/* Rendering the Outlet component which will render the component for the current route */}

      <Outlet />

      {/* Rendering the Footer component */}
      <Footer />
    </>
  );
}
