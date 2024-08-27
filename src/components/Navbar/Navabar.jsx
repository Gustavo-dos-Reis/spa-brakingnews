import logo from "../../images/LogoBN.png"
import"./Navbar.css"

export function Navbar(){
    return(
    <>
        <nav>
            <div className="input-search-space">
            <i className="bi bi-search"></i>
                <input type="text"  placeholder="Pesquise por um titulo"/>

            </div>

            <img src={logo} alt="Logo do Braking News" />

            <button>Entrar</button>
        </nav>
    </>
    )
}