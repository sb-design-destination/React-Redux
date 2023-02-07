import React from 'react';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBContainer
} from 'mdb-react-ui-kit';
const Carddetails = () => {
    return (
        <>
            <div className="container">
                <div className="col text-center mt-5 ">
                    <h2 style={{ textTransform: "uppercase" }} className="fs-2">Items Details Page</h2>
                </div>

                <MDBCard className='mt-5' style={{ maxWidth: '640px', margin: "auto" }} >
                    <MDBRow className='justify-content-center'>
                        <MDBCol md='4' className='vertical-item-center' style={{marginTop:"90px"}}>
                            <MDBCardImage src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" alt='...' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <table>
                                    <tr>
                                        <td>
                                            <p> <strong>Restaurant</strong>  :Massala theorry </p>
                                            <p> <strong>Price</strong>  : ₹ 350</p>
                                            <p> <strong>Dishes</strong>  : North indian biryai </p>
                                            <p> <strong>Total</strong>  :₹ 3590</p>
                                            <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                <span style={{ fontSize: 24 }}>-</span>
                                                <span style={{ fontSize: 22 }}>1</span>
                                                <span style={{ fontSize: 24 }}>+</span>

                                            </div>

                                        </td>
                                        <td>
                                            <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}> 3.8 ★	</span></p>
                                            <p><strong>Order Review : </strong> <span >1175 ndskjdk ajhsnnus	</span></p>
                                            <p><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i>	</span></p>
                                        </td>
                                    </tr>
                                </table>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>

            </div>
        </>
    );
};

export default Carddetails;