import { createBrowserRouter, RouteObject } from "react-router-dom";
import AcademicsPage from "./pages/AcademicsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import NewsPage from "./pages/NewsPage";
import ErrorPage from "./pages/ErrorPage";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdmissionsPage from "./pages/AdmissionsPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "academics",
        element: <AcademicsPage />,
      },
      {
        path: "admissions",
        element: <AdmissionsPage />,
      },
      {
        path: "facilities",
        element: <FacilitiesPage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
