import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="">
      <Header />
      <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
        {/* cut out 100 height from minimum height */}
        <Outlet />
      </main>
    </div>
  );
}

export default App;
