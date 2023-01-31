import App from "../App";
import CreateUsers from "../components/createUser";
import UpdateUsers from "../components/updateUsers";
import GetList from "../components/Dashboard/getList";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className="App">You reached to wrong URL</h1>,
    children: [
      {
        index: true,
        path: "getList",
        element: <GetList />,
      },
    ],
  },
  {
    path: "createUser",
    element: <CreateUsers />,
    errorElement: <h1 className="App">You reached to wrong URL</h1>,
  },
  {
    path: "updateUser",
    element: <UpdateUsers />,
    errorElement: <h1 className="App">You reached to wrong URL</h1>,
  },
]);
export default router;
