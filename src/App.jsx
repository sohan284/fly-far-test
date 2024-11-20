import "./App.css";
import 'aos/dist/aos.css';

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Route.jsx';
import { useEffect } from "react";
import Aos from "aos";
function App() {
  useEffect(() => {
    // Initialize AOS
    Aos.init({
      duration: 500,
      once: false, 
    });
  }, []);
  return <>
   <RouterProvider router={router} />
   </>;
}

export default App;
