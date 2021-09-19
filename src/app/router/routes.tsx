import React from "react";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";

export const publicRoutes: Array<{
  path: string;
  exact: boolean;
  component: React.FC;
}> = [
  {
    path: "/",
    exact: true,
    component: Login,
  },
];

export const privateRoutes: Array<{
  path: string;
  exact: boolean;
  component: React.FC;
}> = [
  {
    path: "/home",
    exact: true,
    component: Home,
  },
];
