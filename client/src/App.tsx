import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ProductsProvider } from "./context/Products";
import Home from "./pages/Home/index";
import ProductDetailPage from "./pages/ProductDetail";
import SearchResultPage from "./pages/SearchResult/index";
import Navbar from "./components/molecules/Navbar";

const App = () => {
  const routes = routeList.map((route, i) => <Route key={i} {...route} />);

  return (
    <ProductsProvider>
      <Router>
        <Navbar />
        <Routes>{routes}</Routes>
      </Router>
    </ProductsProvider>
  );
};

const routeList = [
  {
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    path: "/items",
    element: <SearchResultPage />,
    exact: true,
  },
  {
    path: "/items/:id",
    element: <ProductDetailPage />,
    exact: true,
  },
];

export default App;
