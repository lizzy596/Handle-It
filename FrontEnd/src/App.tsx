import { Routes, Route } from 'react-router-dom';
import publicRoutes from './Routing/public.routes';
import protectedRoutes from './Routing/protected.routes';

function App() {
  return (
    <>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.element />
              </route.layout>
            }
          />
        ))}
        {protectedRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.element />
              </route.layout>
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
