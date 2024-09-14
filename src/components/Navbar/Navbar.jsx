import logo from "../../images/LogoBN.png"

import { Button, ImageLogo, InputSpace, Nav } from "./NavbarStyled"


export function Navbar(){
    return(
    <>
        <Nav>
            <InputSpace>
                <i className="bi bi-search"></i>
                <input type="text"  placeholder="Pesquise por um titulo"/>
            </InputSpace>

            <ImageLogo src={logo} alt="Logo do Braking News" />

            <Button>Entrar</Button>
        </Nav>
    </>
    )
}