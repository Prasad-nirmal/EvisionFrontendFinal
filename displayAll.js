import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

const DisplayAll=()=> {
  let result
  const [images , setImages] = useState([]);
  useEffect(()=>{
    getData()
  },[]) 

  const getData=()=>{
    axios.get("http://localhost:8080/downloadall")
    .then((response)=>{
      result=response.data
      console.log(result)

      setImages(response.data)
    })
  }

  return (
    <div>
    <div className="container">
      <div>
        {/* <h1><center>eVision</center></h1> */}
      </div>
      <hr></hr>
    <div className="row">
      <div className="col-10">
          <table className="table table-image" style={{marginLeft:"5rem"}}>
            <thead>
              <tr>
                <th scope="col">Image_Id</th>
                <th scope="col">TimeStamp</th>
                <th scope="col">Captured_Image</th>
                <th scope="col">Processed_Image</th>
                <th scope="col">Result</th>
              </tr>
            </thead>
            <tbody>
            {images.map((image)=>{ return(
              <tr>
                <th scope="row">{image[0]}</th>
            <td>{image[1]}</td>
            <td>
                  <img src={`data:image/jpeg;base64,${image[3]}`} className="rounded float-left" alt="Captured_Image" />
            </td>
            <td>
                  <img src={`data:image/jpeg;base64,${image[4]}`} className="rounded float-left" alt="Processed_Image" />
            </td>
            <th>{image[2]}</th>
                  </tr>
                   )})}
            </tbody>
           
            </table>
            </div>
          </div>
          </div>
          </div>
    );
}

export default DisplayAll;