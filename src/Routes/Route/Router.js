import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import About from "../../Pages/About US/About";
import Contact from "../../Pages/Contact Us/ContactUs";
import ContactUs from "../../Pages/Contact Us/ContactUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about-us",
                element: <About></About>
            },
            {
                path: "/contact-us",
                element: <ContactUs></ContactUs>
            }
        ]
    }
]);

export default router;