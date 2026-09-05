import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Layout from "./layout/WebLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'About',
        element: <About/>
      }
    ]
  }
]);

export default function App() {
  return (
    <>
      <div className="min-h-screen">
        <RouterProvider router={router} />
      </div>
    </>
  );
}