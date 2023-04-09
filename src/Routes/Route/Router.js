import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import About from "../../Pages/About US/About";
import Contact from "../../Pages/Contact Us/ContactUs";
import ContactUs from "../../Pages/Contact Us/ContactUs";
import TermsConditions from "../../Pages/Legal Pages/TermsConditions";
import PrivacyPolicy from "../../Pages/Legal Pages/PrivacyPolicy";
import CookiePolicy from "../../Pages/Legal Pages/CookiePolicy";
import Licensing from "../../Pages/Legal Pages/Licensing";

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
            },
            {
                path: "/terms&conditions",
                element: <TermsConditions></TermsConditions>
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy></PrivacyPolicy>
            },
            {
                path: "/cookie-policy",
                element: <CookiePolicy></CookiePolicy>
            },
            {
                path: "/licensing",
                element: <Licensing></Licensing>
            },
        ]
    }
]);

export default router;