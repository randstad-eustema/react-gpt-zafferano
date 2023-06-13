import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostPage from "./pages/PostPage";
import ErrorPage from "./pages/ErrorPage";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

function App() {
  return (
    <BrowserRouter>
      <TheHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <TheFooter />
    </BrowserRouter>
  );
}

export default App;
