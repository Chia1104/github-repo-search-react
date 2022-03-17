import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RepoListPage from "./pages/RepoListPage";
import NotFoundPage from "./pages/exceptions/NotFoundPage";
import ErrorPage from "./pages/exceptions/ErrorPage";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<RepoListPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
