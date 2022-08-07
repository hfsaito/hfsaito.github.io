import * as React from "react";

import { Store } from "./store";

export const StoreContext = React.createContext<Map<number, Store<any>>>(new Map());
