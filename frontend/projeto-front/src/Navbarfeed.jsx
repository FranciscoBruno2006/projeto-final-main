import { Link } from "react-router-dom";

export default function Navbarfeed() {
    return(
        <>
        <nav class="navbar md:navbar-expand bg-1" data-bs-theme="dark">
  <div class="container-fluid">
    <Link to="/feed">
    <a class="navbar-brand" href="#">Instagram</a>
    </Link>

    <button class="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarDarkDrawer" aria-controls="navbarDarkDrawer" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" aria-hidden="true"></span>
    </button>
    <dialog class="drawer drawer-end" tabindex="-1" id="navbarDarkDrawer" aria-labelledby="navbarDarkDrawerLabel">
      <div class="drawer-header">
        <h5 class="drawer-title" id="navbarDarkDrawerLabel">Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
      </div>
      <div class="drawer-body mb-2 md:mb-0">
        <ul class="nav navbar-nav me-auto">
          <li class="nav-item">
            
          </li>
          
          
        </ul>
        <li class="nav-item">
            <button class="nav-link" type="button" data-bs-toggle="menu" aria-expanded="false">
              <div className="d-flex align-items-center mb-2">
              <img src="https://placehold.co/45x45" className="rounded-circle me-2" alt="avatar"
              /></div>
            </button>
            <div class="menu">
              <Link to="/perfil">
              <a class="menu-item" href="#">Perfil</a>
              </Link>
              <hr class="menu-divider"/>
              <Link to="/Config">
              <a class="menu-item" href="#">Configuração</a>
              </Link>
              
            </div>
          </li>
      </div>
    </dialog>
  </div>
</nav>
        </>
    )
    
}