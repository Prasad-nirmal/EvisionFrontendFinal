import "./Header.css";

function Header(){
    return( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div className="image">
          <a href="/">
          <img src="logo1.png" class="navbar-brand"></img>
          </a>
          </div>
          <div className="header-left">
            <div className="user">
          <center><i class="bi bi-person-circle"></i></center>
          <span>Welcome,</span> <br></br>
          <center><span style={{color:"red", fontWeight:"bold"}}>{sessionStorage.getItem("emailId")} </span></center>
          </div>
      
          <button type="button" class="btn btn-primary position-relative">
          <i class="bi bi-bell"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
           1
        </span>
        </button>
    
          </div>

          

{/* button on header */}
{/* <div className="dashbord-button">
            <a href="/dashboard">
            <button type="button">Dashboard</button>
            </a>
          </div>
          <div className="options-button">
            <button type="button">Menu</button> */}



          {/* <nav className="navbar">
  <button
    className="toggle"
    onClick={() => setMenuOpen((prev) => !prev)}
  >
    {menuOpen ? 'close' : 'open'}
  </button>
  <ul className={`menu-nav${menuOpen ? ' show-menu' : ''}`}>
    <ul>1</ul>
    <ul><a href="/getData">2</a></ul>
    <ul>3</ul>
  </ul>
</nav> */}
          </div>
      </nav>
    );
}
export default Header;