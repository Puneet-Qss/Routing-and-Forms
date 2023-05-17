import { createBrowserRouter, RouterProvider } from "react-router-dom";



import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./components/RootLayout";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    
    children: [
      { path:'/', element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Footer", element: <Footer /> },
    ],
  },
]);


function App() {
  return (

      <RouterProvider router={router} />
 
  );
}

export default App;
