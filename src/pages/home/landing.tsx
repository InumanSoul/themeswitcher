import React from "react";
import { Container, HeroSection, UnderControlSect, EasierSect, PlansSect, Footer, DisplayText } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCoffee } from "@fortawesome/pro-regular-svg-icons";

function Landing(){
    return(
        <Container>
            <HeroSection>
                <DisplayText>Controlá tu negocio con Printit</DisplayText>
                <p>La plataforma creada para ayudarte a gestionar tu empresa de manera sencilla.</p>
                <p>Saber más</p>
                <p>Crear cuenta gratis</p>
            </HeroSection>
            <UnderControlSect>
                <h1>Todo bajo control, sin complicaciones.</h1>
                <p>Gestioná los datos de tu empresa desde donde estés, tus datos están seguros en la nube.</p>
            </UnderControlSect>
            <EasierSect>
                <h1>En equipo la vida es más sencilla.</h1>
                <p>Agregá a tus colaboradores para encargarse de todo, sin perder el control.</p>
            </EasierSect>
            <PlansSect>
                <h1>Conocé los planes que tenemos para vos.</h1>
            </PlansSect>
            <Footer>
                    <div>
                        Logo Printit
                    </div>
                    <div>
                        <h4>Printit</h4>
                        <p>Módulos</p>
                        <p>Planes</p>
                        <p>Términos</p>
                        <p>Privacidad</p>
                    </div>
                    <div>
                        <h4>Nosotros</h4>
                        <p>Acerca de</p>
                        <p>El equipo</p>
                        <p>FAQ</p>
                    </div>
                    <div>
                        <h4>Soporte</h4>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Email</p>
                    </div>
                <div>
                    <p>© 2021 Printit, hecho con <FontAwesomeIcon icon={faHeart} /> y <FontAwesomeIcon icon={faCoffee} />, mantenido por el equipo de Mapache.</p>
                </div>
            </Footer>
        </Container>
    )
}
export default Landing;

