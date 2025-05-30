"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
