import { Navigate } from 'react-router-dom';
import DefaultLayout from '../Layouts/Default.layout';
import { Auth } from '../Views';

// interface Route {
//   path: string;
//   exact: boolean;
//   layout: React.FC;
//   element: React.FC;
// }

const publicRoutes = [
  {
    path: '/',
    exact: true,
    layout: DefaultLayout,
    element: () => <Navigate to='/login' />,
  },
];

export default publicRoutes;
