import loadable from '@loadable/component'
import {BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
// import TestPage from "./pages/TestPage";

const NotFoundPage = loadable(() => import('./pages/exceptions/NotFoundPage'))
const HomePage = loadable(() => import('./pages/HomePage'))
const RepoListPage = loadable(() => import('./pages/RepoListPage'))
const RepoDetailPage = loadable(() => import('./pages/RepoDetailPage'))
// const RepoDetailModal = loadable(() => import('./components/RepoDetailModal'))

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Navigate to='/home' />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/users/:userName/repos" element={<RepoListPage />} >
                  {/*<Route path=":repoName" element={<RepoListPage />} />*/}
              </Route>
              <Route path="/users/:userName/repos/:repoName" element={<RepoDetailPage />} />
              {/*<Route path="/test" element={<TestPage />} />*/}
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
