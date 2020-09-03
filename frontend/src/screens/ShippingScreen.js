import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

function ShippingScreen(props) {

  const [district, setDistrict] = useState('');
  const [municipalityVdc, setMunicipalityVdc] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  
  const dispatch = useDispatch();
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ district, municipalityVdc, address, contactNumber }));
    props.history.push('payment');
  }
  return <div>
    <CheckoutSteps step1 step2 ></CheckoutSteps>

    <div className="form">
      <form onSubmit={submitHandler} >
        <ul className="form-container">
          <li>
            <h2>Shipping</h2>
          </li>
          
          <li>
            <label htmlFor="district">
              District
            </label>
            <input type="text" name="district" id="district" onChange={(e) => setDistrict(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="municipality/vdc">
              Municipality / VDC
            </label>
            <input type="text" name="municipality/vdc" id="municipality/vdc" onChange={(e) => setMunicipalityVdc(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="address">
              Address
            </label>
            <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)}>
            </input>
          </li>
          <li>
            <label htmlFor="contact number">
              Contact Number
            </label>
            <input type="text" name="contact number" id="contact number" onChange={(e) => setContactNumber(e.target.value)}>
            </input>
          </li>
          <li>
            <button type="submit" className="button primary">Continue</button>
          </li>
          
        </ul>
      </form>
    </div>
  </div>

  
}
export default ShippingScreen;