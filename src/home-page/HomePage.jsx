import React, { useEffect } from 'react';
import {
    useLocation,
    useHistory
} from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function HomePage() {
    const history = useHistory();
    let query = useQuery();
    useEffect(() => {
        const code = query.get('code');
        console.log(query.get('codes'));
        fetch('http://localhost:3001/authorize', {
            method: 'post',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify({ code })
        })
            .then(res => res.json())
            .then(resp => {
                console.log(resp)
                if (resp.authorized) {
                    localStorage.setItem('auth', JSON.stringify(resp.auth));
                    history.push("/main");
                }
            })
            .catch(err => console.log(err))
    }, []);
    console.log(query);
    return (
        <div>
            code page
            <div>{query.get('code')}</div>
            <div>{query.get('scope')}</div>
        </div>
    );
}

export default HomePage;