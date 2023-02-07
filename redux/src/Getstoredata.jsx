import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import React from 'react';
// import { retriveUsers } from './Action/users';
import { SelectUser } from "./Reducer/users";

const Getstoredata = () => {
    const users = useSelector(SelectUser)
    // const dispatch = useDispatch();
    // useLayoutEffect(()=>{
    //     getUsers()
    // })
    // async function getUsers() {
    //     let response = await dispatch(retriveUsers())
    // }
    return (
        <div>
            {JSON.stringify(users)}
            kai pn
        </div>
    );
};

export default Getstoredata;