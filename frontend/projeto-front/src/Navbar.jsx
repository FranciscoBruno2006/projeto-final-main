import 'bootstrap/dist/css/bootstrap.min.css'
function Navbar() {
  return(
    <>
    <nav className="navbar md:navbar-expand bg-1" data-bs-theme="dark">
        <div className="container-fluid">
    <a className="navbar-brand" href="#">Instagram</a>
    <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDarkDrawer" aria-controls="navbarDarkDrawer" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" aria-hidden="true"></span>
    </button>
    
      </div>
    </nav>
    </>
  )
    
}
export default Navbar;