"use client";
import {  useSelector } from "react-redux";
import { LogInf,getState,AuthInf } from "@/store/features/auth/authSlice";
// import { useRouter } from "next/navigation";
const Layout = ({ children } : any) => {
    // const router = useRouter()
    const authState : AuthInf = useSelector(getState)
    if (authState.isLogedIn == LogInf.LOGED_IN) return <>{children}</>
    if (authState.isLogedIn == LogInf.NOT_FETCHED) return <></>
    if (authState.isLogedIn == LogInf.LOADING) return <>loading</>
    if (authState.isLogedIn == LogInf.NO_USER) {
        // router.push("/")
        if (typeof window !== "undefined") {
            window.location.href = "/auth/register";
        }
        return <></>
    }
    return <></>;
};

export default Layout;