import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from "./Component/Header.jsx"
import Card from "./Component/Card.jsx"
import Carddetails from "./Component/Carddetails.jsx"



const Mainrouter = () => {
    return (
        <>
            <Header></Header>

            <Routes>
                <Route path='/' element={<Card />}></Route>
                <Route path='/cart/:id' element={<Carddetails />}></Route>
            </Routes>
        </>
    );
};

export default Mainrouter;