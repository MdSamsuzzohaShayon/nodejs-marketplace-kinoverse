import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/reducer/subscriber';

const Login = (props) => {
    const dispatch = useDispatch();

    return <div>
        <button onClick={(e) => { dispatch(login({ name: "Updated name", email: "updated email" })) }}>Login</button>
        <button onClick={(e) => { dispatch(logout()) }}>Logout</button>
    </div>;
};

export default Login;
