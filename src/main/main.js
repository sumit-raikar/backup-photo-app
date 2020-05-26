import React, { useState, useEffect } from 'react';

function Main() {
    const [authenticUser, setAuthenticUser] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem('auth'));
        if ('access_token' in auth) {
            setAuthenticUser(true);
            setIsLoading(false);
            fetch('http://localhost:3001/list', {
                method: 'POST',
                headers: new Headers({ 'content-type': 'application/json' }),
                body: JSON.stringify({ token: auth['access_token'] })
            })
                .then(res => res.json())
                .then(resp => {
                    console.log(resp);
                })
        } else {
            setAuthenticUser(false);
            setIsLoading(false);
        }
    }, []);
    if (isLoading) {
        return <div>Loading user info...</div>
    }
    return (
        <div>
            {authenticUser && <div>Welcome Authentic user</div>}
            {!authenticUser && <div>Not Authorized</div>}
        </div>
    );
}

export default Main;