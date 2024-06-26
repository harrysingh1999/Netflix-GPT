import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./Components/Login";
import { Provider } from "react-redux";
import store from "./Utils/Store/Store";
import Browse from "./Components/Browse";
import AI_Search from "./Components/AI_Search";
import MovieDetails from "./Components/MovieDetails";
import MovieCredits from "./Components/MovieCredits";
import Error from "./Components/Error";
import Iframe from "./Components/Iframe";
import Card from "./Components/Card";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="Login" element={<Login />} />
      <Route path="Browse" element={<Browse />} />
      <Route path="AI_Search" element={<AI_Search />} />
      <Route path="MovieDetails" element={<MovieDetails />} />
      <Route path="MovieCredits" element={<MovieCredits />} />
      <Route path="Card" element={<Card />} />
      <Route path="Iframe" element={<Iframe />} />
      <Route path="Error" element={<Error />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <RouterProvider router={router} />
    {/* </React.StrictMode> */}
  </Provider>
);

reportWebVitals();
