import React from 'react';

export const Login = (props: any) => {
    return (
        <div>
            <p>Test-account:</p>
            <p>Email: free@samuraijs.com</p>
            <p>Password: free</p>
            <div><label>Login: <input type="text"/></label></div>
            <div><label>Password: <input type="text"/></label></div>
            <button>Login</button>
        </div>
    );
}

