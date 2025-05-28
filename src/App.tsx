import { Outlet } from "react-router-dom";
import Footer from "./app/components/footer";
import Header from "./app/components/header";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-x-hidden">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
