import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import Login from "./pages/login.jsx";
import Feed from "./pages/feed.jsx";
import Home from "./pages/home.jsx";

const root = document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} index />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

