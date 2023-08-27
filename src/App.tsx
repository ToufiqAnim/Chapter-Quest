import { Toaster } from "react-hot-toast";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import React from "react";
function App() {
  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
