import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-6 py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
