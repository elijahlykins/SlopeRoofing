import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ContactForm from "../pages/home/components/ContactForm";
import ThankYou from "../pages/home/components/ThankYou";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <ContactForm />,
  },
  {
    path: "/thank-you",
    element: <ThankYou />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
