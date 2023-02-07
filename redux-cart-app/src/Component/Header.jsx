import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBBadge,
    MDBDropdown,
    MDBDropdownToggle,
  

} from 'mdb-react-ui-kit';

import Menu from '@mui/material/Menu';


import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';





export default function App() {
    const [anchorEl, setAnchorEl] = useState()
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const getdata = useSelector((state) => state.cartreducer.carts);
    console.log(getdata);
    return (
        <>
            <MDBNavbar expand='lg' bgColor='dark'>
                <MDBContainer fluid>
                    <Link className="nav-link  text-light" to="/">Add to Cart</Link>


                    <MDBCollapse navbar id='navbarColor02'>
                        <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem className='active'>
                                <Link className="nav-link text-light" to="/">Home</Link>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                        <MDBDropdown>
                            <MDBNavbarLink className='me-3 me-lg-0' >
                                <MDBDropdownToggle tag='a' className='hidden-arrow'>
                                    <MDBIcon id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick} color='white' fas icon="shopping-cart" />
                                    <MDBBadge color='primary' notification pill >{getdata.length}</MDBBadge>
                                </MDBDropdownToggle>
                            </MDBNavbarLink>
                        </MDBDropdown>
                    </MDBCollapse>
                </MDBContainer>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}

                >

                    {
                        getdata.length ?

                            <Table style={{ width: "24rem", padding: 10 }}>
                                <thead style={{ borderBottom: "2px solid grey", font: "status-bar" }} className="fs-6">
                                    <tr >
                                        <th scope='row'>Photo</th>
                                        <th scope='row'> Restaurant Name</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        getdata.map((ky) => {
                                            return <tr style={{ borderBottom: "1px solid grey" }} >
                                                <td >
                                                    <Link to={`cart/${ky[1].id}`}>
                                                    <img src={ky[1].imgdata} style={{ width: "5rem", height: "5rem" }} alt="" />
                                                    </Link>
                                                   </td>
                                                <td >
                                                    <p>{ky[1].rname}</p>
                                                    <p>Price : ₹{ky[1].price}</p>
                                                    <p>Quantity : {ky[1].qnty}</p>
                                                    {/* <p style={{ color: "red", fontSize: 20, cursor: "pointer" }}>
                                                            <i className='fas fa-trash smalltrash'></i>
                                                        </p> */}
                                                </td>
                                                <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} >
                                                    <i className='fas fa-trash largetrash'></i>
                                                </td>
                                            </tr>
                                        })
                                    }
                                    <p className='text-center'>Total :₹ </p>
                                </tbody>
                            </Table> :
                            <div className='d-flex align-item-center' style={{ width: "18em", position: "relative" }}>
                                <MDBIcon fas icon="times" onClick={handleClose} style={{ position: "absolute", top: 2, right: 11, fontSize: 23, cursor: "pointer" }} />
                                <p className='fs-5' style={{ marginTop: 18, marginLeft: "20px" }}>Your carts is empty</p>
                                <img src="./cart.gif" alt="" className='emptycart_img' style={{ width: "4rem", padding: 10 }} />
                            </div>
                    }

                </Menu>
            </MDBNavbar>
        </>
    );
}