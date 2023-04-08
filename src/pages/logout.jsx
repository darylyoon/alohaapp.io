import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function Logout() {
    sessionStorage.clear();
    const navigate = useNavigate();
    // navigate("/home");
    useEffect((auth=getAuth()) => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                sessionStorage.clear();
                navigate("/");
                console.log(sessionStorage.getItem('username'));
            })
            .catch((error) => {
                // An error happened.
            });
    }, [navigate]);
    return (
        <div className="logout">
            <h1>Successfully signed out</h1>
        </div>
    );
}

export default Logout;