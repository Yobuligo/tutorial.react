import { FC } from "react";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { ILesson } from "../Lessons/model/ILesson";
import Authentication from "./components/Authentication";
import Main from "./components/Main";
import { IMenuEntry } from "./model/IMenuEntry";
import { Token } from "./model/Token";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

const login = () => {
  if (Token.hasNot()) {
    return redirect("/login");
  }
};

const menuEntries: IMenuEntry[] = [
  { path: "welcome", title: "Welcome" },
  { path: "products", title: "Products" },
  { path: "contact", title: "Contact" },
  { path: "register", title: "Register" },
  { path: "login", title: "Login" },
  { path: "logout", title: "Logout" },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main menuEntries={menuEntries} />,
    children: [
      { path: "/", element: <Welcome /> },
      {
        path: "welcome",
        element: <Welcome />,
        loader: () => {
          return redirect("/");
        },
      },
      {
        path: "products",
        element: <Products />,
        loader: login,
      },
      {
        path: "contact",
        element: <Contact />,
        loader: login,
      },
      {
        path: "login",
        element: <Authentication method="get"/>,
        action: async ({ request }) => {
          const data = await request.formData();
          const email = data.get("email");
          const password = data.get("password");
        },
      },
      {
        path: "register",
        element: <Authentication method="post"/>,
        action: async ({ request }) => {
          const data = await request.formData();
        },
      },
      {
        path: "logout",
        loader: () => {
          Token.delete();
          return redirect("/");
        },
      },
    ],
  },
]);

class LessonAuthentication implements ILesson {
  id: string = "lessonAuthentication";
  title: string = "Lesson Authentication";
  component: FC<{}> = () => {
    return <RouterProvider router={router} />;
  };
}

export default LessonAuthentication;
