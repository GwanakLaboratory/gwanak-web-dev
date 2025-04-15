import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeMainPage from './pages/home/main';
import AboutPage from './pages/home/about';
import ServicePage from './pages/home/service';
import TechPage from './pages/home/tech';
import ForgotEmailPage from './pages/auth/forgot-email';
import ForgotPasswordPage from './pages/auth/forgot-password';
import BasicLayout from './components/common/BasicLayout';
import RequireAuth from './hoc/RequireAuth';
import PortfolioListPage from './pages/portfolio/list';
import CreatePortfolioPage from './pages/portfolio/create';
import PortfolioResultPage from './pages/portfolio/result';
import AnalysisMainPage from './pages/analysis/main';
import AnalysisResultPage from './pages/analysis/result';
import RejectAuth from './hoc/RejectAuth';
import LoginPage from './pages/auth/login';
import SignUpPage from './pages/auth/signup';
import NotFoundPage from './pages/system/not-found';
import EventListenerManager from './EventListenerManager';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <EventListenerManager />,
      children: [
        {
          element: <BasicLayout />,
          children: [
            { path: '/', element: <HomeMainPage /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'service', element: <ServicePage /> },
            { path: 'tech', element: <TechPage /> },
          ],
        },
        {
          path: '/auth',
          element: <RequireAuth />,
          children: [
            {
              element: <BasicLayout />,
              children: [
                { path: 'portfolios', element: <PortfolioListPage /> },
                { path: 'portfolios/create', element: <CreatePortfolioPage /> },
                { path: 'portfolios/result', element: <PortfolioResultPage /> },
                { path: 'analysis', element: <AnalysisMainPage /> },
                { path: 'analysis/result', element: <AnalysisResultPage /> },
              ],
            },
          ],
        },
        {
          path: '/',
          element: <RejectAuth />,
          children: [
            {
              element: <BasicLayout />,
              children: [
                { path: 'login', element: <LoginPage /> },
                { path: 'signup', element: <SignUpPage /> },
                { path: 'forgot-email', element: <ForgotEmailPage /> },
                { path: 'forgot-password', element: <ForgotPasswordPage /> },
              ],
            },
          ],
        },
        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
