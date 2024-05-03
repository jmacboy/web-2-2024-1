import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PersonaList from './pages/personas/PersonaList.jsx';
import FormPage from './pages/personas/FormPage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <PersonaList/>,
  },
  {
    path: "/personas/create",
    element: <FormPage/>
  },
  {
    path: "/personas/:id",
    element: <FormPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
