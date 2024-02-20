import React  from 'react';
import { Home } from '../../containers/index';
export const ROUTER_PATH = {
	BASE: "/",
	HOME: "/home",
	ERROR: "/error",
	ANY: "*",
}

export const ROUTING_CONFIG = [
    {
        path: ROUTER_PATH.BASE,
        exact: true,
        element: <Home/>,
        view: "Base",
    },
    {
        path: ROUTER_PATH.HOME,
        exact: true,
        element: <Home/>,
        view: "Failure",
    },
    {
        path: ROUTER_PATH.ERROR,
        exact: true,
        element: <Home/>,
        view: "Error",
    },
];;
