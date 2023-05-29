import { useRoutes } from "react-router-dom";
import './assets/scss/styles.scss';
import Layout from './layouts/Layout';
import { Navigate } from "react-router-dom";
import Main from "./views/Main";
import { Search } from "./views/Search";

const App = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
          { path: "/", element: <Navigate to="/main" /> },
          { path: '/main', element: <Main /> },
          { path: '/search', element: <Search /> },
      ]
    },
  ]);

  return routing;
};

export default App;
