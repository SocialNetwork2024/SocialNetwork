import React, { useState } from "react";
import AllProducts from "./components/AllProduct.jsx";
import SingleProduct from "./components/SingleProduct.jsx";
import CreateProduct from "./components/CreateProduct.jsx"; 
import Search from "./components/Search.jsx";


const App = () => {
  const [view, setView] = useState("AllProducts");
  const changeView = (newView) => {
    setView(newView);
  };

  const renderView = () => {
    if (view === "AllProducts") {
      return <AllProducts />;
    } else if (view === "SingleProduct") {
      return <SingleProduct />;
    } else if (view === "CreateProduct") {
      return <CreateProduct />;
    }
  };

  return (
    <div>
      <nav className="coffee-nav">
        <div
          className={view !== "CreateProduct" ? "nav-unselected" : "nav-selected"}
          onClick={() => {
            changeView("CreateProduct");
          }}
        >
          Create Product
        </div>
        <div
          className={view === "AllProducts" ? "nav-selected" : "nav-unselected"}
          onClick={() => changeView("AllProducts")}
        >
          All Products
        </div>
        <div>
          <Search />
        </div>
      </nav>

      {renderView()}
    </div>
  );
};

export default App;
