import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBTableHead
} from 'mdb-react-ui-kit';

import {ADD} from "../Redux/action/actioncart"
import CardsData from "./CardsData"
import { useDispatch } from 'react-redux';
const Card = () => {

  const [data, setdata] = useState(CardsData)


  const dispatch = useDispatch()

  const Senddata=(e)=>{
    // console.log(e);
    // console.log("sdnms");
    dispatch(ADD(e))
  }
  return (
    <>
      <div className="container">

        <div className="col text-center mt-5 ">
          <h2 style={{ textTransform: "uppercase" }} className="fs-2">Add to cart project</h2>
        </div>

        <div className="row justify-content-center align-item-center">

          {Object.entries(data).map((ky, val) => {
            // console.log("key is ", ky[1].imgdata);
            // console.log("val is ", );
            return <div className="col-md-3" key={val} style={{ width: "33.33%" }}>
              <MDBCard className=" mt-5 card_details mx-2 hover-shadow " style={{borderRadius:"0px"}}>
                <MDBCardImage src={ky[1].imgdata}   position='top' alt='...' className='w-100' style={{height:"16rem",objectFfit: "cover",borderRadius:"0px"}}/>
                <MDBCardBody>
                  <MDBCardTitle>{ky[1].rname}</MDBCardTitle>
                  <MDBCardText>
                  Price: ₹ {ky[1].price}
                  </MDBCardText>
                  <MDBBtn href='#' className='col-lg-12' onClick={()=>{Senddata(ky)}}>Add to Cart</MDBBtn>
                </MDBCardBody>
              </MDBCard>
           
              </div>
            })}

           
        </div>
      </div>

    </>
  );
};

export default Card;