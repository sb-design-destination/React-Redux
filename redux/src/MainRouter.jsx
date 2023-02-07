import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Home.jsx"
import Getstoredata from "./Getstoredata.jsx"
const MainRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/getstoredata' element={<Getstoredata/>}/>
               
            </Routes>
        </>
    );
};

export default MainRouter;