import {React, useState, useEffect, useRef} from 'react'
import axios from "axios";

function FormProduit() {



    const p_title = useRef(null);
    const p_price = useRef(null);
    const p_description = useRef(null);
    const p_category = useRef(null);
    const p_image = useRef(null);

    const baseURL = 'https://fakestoreapi.com/products/';
    const [postResult, setPostResult] = useState(null);

    const fortmatResponse = (res) => {
      return JSON.stringify(res, null, 2);
    };


    async function postData() {
      const postData = {
        title: p_title.current.value,
        price: p_price.current.value,
        category:  p_category.current.value,
        image: p_image.current.value,
        description: p_description.current.value,
      };
  
      try {
        const res = await axios.post('https://fakestoreapi.com/products/', postData, {
          headers: {
            "x-access-token": "token-value",
          },
        });
  
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
  
        setPostResult(fortmatResponse(result));
      } catch (err) {
        setPostResult(fortmatResponse(err.response?.data || err));
      }
    }
  
    const clearPostOutput = () => {
      setPostResult(null);
    };

  

   
  return (
    <div>FormProduit




    </div>


  )
}

export default FormProduit