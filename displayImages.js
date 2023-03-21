import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
// import "./displayImages.css"

const DisplayImage=()=> {
  let result
  const [images , setImages] = useState([]);
  useEffect(()=>{
    getData()
  },[]) 

  const getData=()=>{
    axios.get("http://localhost:8080/download/" + sessionStorage.getItem("imgId"))
    .then((response)=>{
      result=response.data
      console.log(result)

      setImages(response.data)
    })
  }
  
  const [show , setShow] = useState(false);
    const showCImage =()=>{
    console.log("clicked on cImage")
    if(show === false){
    setShow(true);
    }else{
      setShow(false);
    }
    }

    const [shows , setShows] = useState(false);
    const showPImage =()=>{
      console.log("clicked on pImage")
      if(shows === false){
        setShows(true);
      }else{
        setShows(false);
      }
      
      }

  return (
    <div>
       <div className='heading'>
      <h1><center>eVision</center></h1>
    </div>
  <div className="container">
   
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
		    <tr>
		      <th scope="row">{images[0]}</th>
          <td>{images[1]}</td>
          <td>
                {show && <img src={`data:image/jpeg;base64,${images[3]}`} className="rounded float-left" alt="Captured_Image" />}
                <button type="button" className="btn btn-secondary" onClick={showCImage}>
                Captured_Image
                </button>
          </td>
          <td>
                {shows && <img src={`data:image/jpeg;base64,${images[4]}`} className="rounded float-left" alt="Processed_Image" />}
                <button type="button" className="btn btn-secondary" onClick={showPImage}>
                Processed_Image
                </button>
          </td>
          <th>{images[2]}</th>
			    </tr>
          </tbody>
          </table>
          </div>
        </div>
        </div>
        </div>
  );
}

export default DisplayImage;


// for toggle button 
// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }











/*{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */

    // position: absolute; width: 346px; height: 40px; left: 1041px; top: 546px
    // `setPreviewImg("result:image/png;base64," +image.c_image)`
// <img src={`data:image/jpeg;base64,${binary_data}`} />

{/* <td class="w-25"><img src={`data:image/jpeg;base64,${images.cImage}`} alt="Image1" /></td>
          <td class="w-25"><img src={`data:image/jpeg;base64,${images.pImage}`} alt="Image2" /></td> */}


