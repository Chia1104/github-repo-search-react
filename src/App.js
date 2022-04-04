import loadable from '@loadable/component'
import {BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import {useSelector} from "react-redux";
import {RepoDetailModal} from "./components/RepoDetailModal";

const NotFoundPage = loadable(() => import('./pages/exceptions/NotFoundPage'))
const HomePage = loadable(() => import('./pages/HomePage'))
const RepoListPage = loadable(() => import('./pages/RepoListPage'))
const RepoDetailPage = loadable(() => import('./pages/RepoDetailPage'))

function App() {
    const {showUp} = useSelector((state) => state.repoModal);
  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Navigate to='/home' />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/users/:userName/repos" element={<RepoListPage />} >
                  {showUp && <Route path=":repoName" element={<RepoDetailModal />} />}
              </Route>
              {showUp === false && <Route path="/users/:userName/repos/:repoName" element={<RepoDetailPage />} />}
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
