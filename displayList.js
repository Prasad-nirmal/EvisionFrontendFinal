import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

const DisplayList=()=> {
  let result
  const [list , setLists] = useState([]);
  useEffect(()=>{
    getData()
  },[]) 

  const getData=()=>{
    axios.get("http://localhost:8080/downloadbyrange/" + sessionStorage.getItem("imgId"))
    .then((response)=>{
      result=response.data
      console.log(result)

      setLists(response.data)
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
            {list.map((lists)=>{
              return(
              <tr>
                <th scope="row">{lists[0]}</th>
            <td>{lists[1]}</td>
            <td>
                  <img src={`data:image/jpeg;base64,${lists[3]}`} className="rounded float-left" alt="Captured_Image" />
            </td>
            <td>
                  <img src={`data:image/jpeg;base64,${lists[4]}`} className="rounded float-left" alt="Processed_Image" />
            </td>
            <th>{lists[2]}</th>
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

export default DisplayList;