import React, { Component } from "react";

function SideBar() {
    return (
      <div className="container-fluid">
      <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Menu Bar</button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        
     <div class="offcanvas-header">
     <h5 id="offcanvasRightLabel">Menu</h5>
    <button type="button" class="btn btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul>
      <div className="menu">
     <ul> <a href="/getdatabyid">
      Display Image By Id</a></ul>
     </div>
     <div className="menu">
     <ul><a href="/getalldata">Display All Images</a></ul>
     </div>
     <div className="menu">
     <ul><a href="/getdatabyidrange">Display Images By Id Range</a></ul>
     </div>
     <div className="menu">
     <ul><a href="/displaydatabyresult">Filter Images By Result</a></ul>
     </div>
    </ul>
  </div>
</div>
</div>
    );
}

export default SideBar;