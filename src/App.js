import React from "react";
import { Toaster } from "react-hot-toast";

import { Header } from "./components/Header";
import { AppContent } from "./components/AppContent";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <AppContent />
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: "1.4rem",
          },
        }}
      />
    </>
  );
}


export default App;
