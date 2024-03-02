import "./styles/main.scss";
import "./App.css";
import ProductsCategory from "./pages/ProductsCategory";
import Header from "./components/HeaderComponent/HeaderComponent";
import Footer from "./components/FooterComponent/FooterComponent";

function App() {
  return (
    <>
      <Header />
      <ProductsCategory categoryName="Bikes" />
      <Footer />
    </>
  );
}

export default App;
