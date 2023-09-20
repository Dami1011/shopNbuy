import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "92vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
