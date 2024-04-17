import { Routes, Route, Link } from "react-router-dom";
import Test from "./components/Test";
import Board from "./pages/Board";
import Profile from "./pages/Profile";
import BoardDetail from "./pages/BoardDetail";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PhotoPage from "./pages/PhotoPage";

function App() {
  return (
    <div className="App">
      {/* 
      라우팅 연습 
      <h1>routing!</h1>

      <Routes>
        <Route path='/test' element={<Test />} />
      </Routes>
      */}

      {/* 
      라우팅 연습 2 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board/1' element={<BoardDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
     */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/prducts.1" element={<ProductDetailPage />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Header />
      {/* 라우팅하기 */}
      {/* Home 컴포넌트 경로: / */}
      {/* ProductsPage컴포넌트 경로 : /products */}
      {/* ProductsDetailPage컴포넌트 경로 : /products/1 */}
      {/* PhotoPage컴포넌트 경로 : /photos */}
      {/* 이외의 모든 페이지 NotFound 컴포넌트 */}
      <ProductPage />
      <ProductDetailPage />
      <PhotoPage />
      <NotFound />
    </div>
  );
}

export default App;
