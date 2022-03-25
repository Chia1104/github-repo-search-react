import {BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RepoListPage from "./pages/RepoListPage";
import NotFoundPage from "./pages/exceptions/NotFoundPage";
import Header from "./components/Header";
import RepoDetailPage from "./pages/RepoDetailPage";


function App() {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Navigate to='/home' />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/users/:userName/repos" element={<RepoListPage />} />
              <Route path="/users/:userName/repos/:repoName" element={<RepoDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
