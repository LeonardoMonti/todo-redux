import React from "react";
import { Toaster } from "react-hot-toast";

import { Header } from "./components/Header";
import { AppContent } from "./components/AppContent";
import { PageTitle } from "./components/PageTitle";


import styles from "./styles/modules/app.module.scss";

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>Todo Redux</PageTitle>
        <div className={styles.app__wrapper}>
          <Header />
          <AppContent />
        </div>
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
