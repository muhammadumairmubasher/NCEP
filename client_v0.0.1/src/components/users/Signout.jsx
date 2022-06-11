import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router'
import { signout } from 'Service/api';
import { UserContext } from 'Main';

const Signout = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();
    const callSingOut = async (req, res) => {
        document.cookie = "JsonWebToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        const response = await signout();
        if (response.status === 200) {
            dispatch({ type: "USER", payload: false });
            // localStorage.setItem("initState", null);
            history.push('/signin', { replace: true });
        }
    }
    useEffect(() => {
        callSingOut();
    }, [])
    return (
        <></>
    )
}
export default Signout
