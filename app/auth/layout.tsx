"use client";
import { isTokenExist } from "../../lib/auth"
const layout = ({ children } : any) => {

    if (isTokenExist()) {
        if (typeof window !== "undefined") {
            window.location.href = "/";
        }
        return <></>
    }
    return <>{children}</>;
};

export default layout;