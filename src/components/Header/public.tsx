import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

function Header() {
	// const { colors, title } = useContext(ThemeContext);
	return(
		<Container>
			<img className="brand-md" src="https://printit.com.py/img/vendor/logo.svg" alt="Printit" />
			<div>
				<Link to="/account" className="text-decoration-none text-reset mr3">Módulos</Link>
				<Link to="/account" className="text-decoration-none text-reset mr3">Precios</Link>
				<Link to="/account" className="text-decoration-none text-reset mr3">Ayuda</Link>
			</div>
			<Menu />
		</Container>
	);
};

function MenuLogin() {
	return(
		<div>
			<Link to="/login" className="text-decoration-none text-reset">Iniciar Sesión</Link>
			<Link to="/register" className="text-decoration-none text-reset ml3">Registrarse</Link>
		</div>
	);
};

function UserMenu(props: any){
	return(
		<Link to="/account" className="text-decoration-none text-reset ml3">{props.name}</Link>
	);
};

function Menu(){
	const token = localStorage.getItem('app_token');
	const user = JSON.parse(localStorage.getItem('user') || "{}");

	if(token !== null){
		return <UserMenu name={user.name}/>;
	}
	return <MenuLogin />;
}

export default Header;