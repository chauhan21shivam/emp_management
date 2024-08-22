import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import AddEmployee from "./components/AddEmployee";
import ViewAll from "./components/ViewAll";
import SingleEmployee from "./components/SingleEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "addemp",
          element: <AddEmployee />,
        },
        {
          path: "viewall",
          element: <ViewAll />,
        },
        {
          path: "viewsingle/:id",
          element: <SingleEmployee />,
        },
        {
          path: "update/:id",
          element: <UpdateEmployee />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
