import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface Props {
    toggleTheme(): void;
}

const Sidemenu: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);
    const user = JSON.parse(localStorage.getItem('user') || "{}");

    return (
        <Container>
            <Link to="/">
                <img src="https://printit.com.py/img/logo.svg" className="brand-mini"/>
            </Link>
            <div className="link-menu">
                <Link to="/" style={{ textDecoration: 'none', }}>Tablero</Link>
                <Link to="/sucursales" style={{ textDecoration: 'none', }}>Ingresos</Link>
                <Link to="/sucursales" style={{ textDecoration: 'none', }}>Gastos</Link>
                <Link to="/sucursales" style={{ textDecoration: 'none', }}>Contactos</Link>
                <Link to="/sucursales" style={{ textDecoration: 'none', }}>Reportes</Link>
                <Link to="/sucursales" style={{ textDecoration: 'none', }}>Inventario</Link>
                <Link to="/sucursales" style={{ textDecoration: 'none', }}>Configuracion</Link>
                <Link to="/sucursales" style={{ textDecoration: 'none', }}>Sucursales</Link>
            </div>
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={35}
                handleDiameter={20}
                offColor={shade(0.2, colors.primary)}
                onColor={colors.secondary}
            />
            <div className="switch-empresa">
                <small className="text-bold">Empresa</small>
                <Link to="/account" style={{ textDecoration: 'none', }}>{user.name}</Link>
            </div>

        </Container>
    );
};

export default Sidemenu;