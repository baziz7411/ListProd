import React, { lazy, Suspense } from "react";
import { useHashNavigation } from "./components/UseHashNavigation";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./pages/Header";

function App() {
  const [page, navigate] = useHashNavigation("home");

  const pageContent = getPageContent(page);

  return (
    <div className="container y-2 fixed-top">
      <Header  currentPage={page} navigate={navigate} />
      <div>{pageContent}</div>
    </div>
  );
}

function getPageContent(page) {
  if (page === "home") {
    return <Home />;
  }
  if (page === "single") {

        const SingleLazy = lazy(()=> import('./pages/Single'))

    return <Suspense fallback={<div>Chargement des composants en cour </div>}>  // chargement de manière asynchrone 
            <SingleLazy />
        
        </Suspense>
  }
  if (page === "contact") {
    return <Contact />;
  }
  return <h2>404 - Page "{page}" not found</h2>;
}

export default App;
