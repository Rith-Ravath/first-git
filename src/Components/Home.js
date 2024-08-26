import { Link } from "react-router-dom"
export const HomeMenu=() =>{
    return(
        <>
        <nav className="navbar navbar-expand-lg text-bg-info">
            <div className="container-fluid">
                 <img class="dark-mode-item h-40px" src="https://www.istad.co/resources/img/logo_md.png" alt="logo" width={40} height={40}/>
                <Link className="navbar-brand" to={"/"}>ទំព័រដើម</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/read/2"}>អានបន្ថែម</Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link" to={"/me"}>អំពីយើង</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to={"/contact"}>ទំនាក់ទំនង</Link>
                    </li>
                 </ul>
                       
                
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        
        </>
    )
}
export default HomeMenu