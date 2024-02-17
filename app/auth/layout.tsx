"use client";

const layout = ({ children } : any) => {

    const token = localStorage.getItem('token');

    if (token) {
        window.location.href = "/";
        return <></>
    }
 
   return <>{children}</>;
};

export default layout;