import Header from './components/header/Header';
import './App.css';
import Carousel from './components/Carousel/Carousel';
import Category from './components/category/Category';
// import Product from './components/product/product';
function App() {
  return (
    <div className="App">
     <Header/>
     <Carousel/>
     <Category/>
     {/* <Product/> */}
    </div>
  );
}

export default App;
