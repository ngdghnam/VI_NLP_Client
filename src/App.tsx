import { Routes, Route } from "react-router";
import "./App.css";
import { ROUTES } from "./routes";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.WELCOME} element={<Welcome />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
