import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App';
import Components from './components';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "", element: <Components.Home /> },
//       { path: "about", element: <Components.About /> },
//       { path: "contact", element: <Components.Contact /> },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Components.Home />} />
      <Route path='about' element={<Components.About />} />
      <Route path='contact' element={<Components.Contact />} />
      <Route
        loader={Components.gitFetch}
        path='github'
        element={<Components.Github />}
      />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
