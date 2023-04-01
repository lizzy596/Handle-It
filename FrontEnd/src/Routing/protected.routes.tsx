import { Navigate } from 'react-router-dom';
import DefaultLayout from '../Layouts/Default.layout';
import {Auth} from '../Views';


const protectedRoutes = [
  {
    path: '/login',
    exact: true,
    layout: DefaultLayout,
    roles: ['admin', 'user'],
    element: Auth,
  },
  // {
  //   path: '/tos',
  //   exact: true,
  //   layout: DashboardLayout,
  //   roles: ['admin', 'user'],
  //   element: Tos,
  // },

];

export default protectedRoutes;