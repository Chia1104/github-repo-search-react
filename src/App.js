import {BrowserRouter, Route, Routes, withRouter} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RepoListPage from "./pages/RepoListPage";
import NotFoundPage from "./pages/exceptions/NotFoundPage";
import ErrorPage from "./pages/exceptions/ErrorPage";
import Header from "./components/Header";
import RepoDetailPage from "./pages/RepoDetailPage";


function App() {
  return (
      <BrowserRouter>
          {/*<Header />*/}
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users/:userName/repos" element={<RepoListPage />} />
              <Route path="/users/:userName/repos/:repoName" element={<RepoDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
