import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
function PaypalButton(props) {
  const [sdkReady, setSdkReady] = useState(false);

  const addPaypalSdk = async () => {
    const result = await axios.get("/api/config/paypal");
    const clientID = result.data;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.paypal.com/sdk/js?client-id=' + clientID;
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    }
    document.body.appendChild(script);
  }

  const createOrder = (data, actions) =>{
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => actions.order
    .capture()
    .then(details => props.onSuccess(data, details))
    .catch(err => console.log(err));

  useEffect(() => {
    if (!window.paypal) {
      addPaypalSdk();
    }
    return () => {
      //
    };
  }, []);

  if (!sdkReady) {
    return <div>Loading...</div>
  }

  const Button = window.paypal.Buttons.driver('react', { React, ReactDOM });

  return <Button {...props} createOrder={(data, actions) => createOrder(data, actions)}
    onApprove={(data, actions) => onApprove(data, actions)} />
}

export default PaypalButton;

// BEFORE ALL ,see https://developer.paypal.com/docs/business/checkout/set-up-standard-payments/
// 

// ##1. Oficial. See also https://www.npmjs.com/package/react-paypal-button-v2#large_blue_diamond-usage-example ----> react-paypal-button-v2

// ##2. Indian !!!(works) See also https://www.youtube.com/watch?v=f5Gpnqj-x-c - must create business account paypal Sanbox (!!!) Test account

// ##3. !!! See also:
  //https://github.com/fireship-io/193-paypal-checkout-v2-demos/blob/master/react-app/src/App.js 
  //https://www.youtube.com/watch?v=AtZGoueL4Vs&feature=youtu.be 