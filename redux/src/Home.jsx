import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux"
import React from 'react';
import { retriveUsers } from './Action/users';
import Headerfile from "./Header"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const Home = () => {
    const dispatch = useDispatch();
    useLayoutEffect(()=>{
        getUsers()
    })
    async function getUsers() {
        let response = await dispatch(retriveUsers())
    }
    return (
        <div>
            <Headerfile/>
            hello
        </div>
    );
};

export default Home;