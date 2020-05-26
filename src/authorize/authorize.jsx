import React from 'react';

class AuthorizeGoogle extends React.Component {
    componentDidMount() {
        fetch('http://localhost:3001/')
            .then(resp => {
                return resp.json();
            })
            .then(res => {
                window.open(res.url,'_self');
            })
    }
    render() {
        return (<div>
            Hello world by google
        </div>);
    }
}

export default AuthorizeGoogle;