import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RepoListPage from "./pages/RepoListPage";
import NotFoundPage from "./pages/exceptions/NotFoundPage";
import ErrorPage from "./pages/exceptions/ErrorPage";
import Header from "./components/Header";


function App() {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users/:userName/repos" element={<RepoListPage />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
