import React, { useContext } from "react";
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { Container, Profile, InputSearch, SearchBox } from './styles';
import {
  SuccessButton,
  Dropdown,
  DropdownHeader,
  DropdownMenuRight,
} from "../../styles/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/pro-regular-svg-icons";

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const user = JSON.parse(localStorage.getItem('user') || "{}");

  const history = useHistory()
  const token = localStorage.getItem('app_token')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  }
  const handleLoggout = () => {
    axios
      .post('http://127.0.0.1:8000/api/logout', token, {
        headers: headers,
      })
      .then((res) => {
        console.log(res.data)
        localStorage.removeItem('app_token')
        localStorage.removeItem('user')

        history.push('/login')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Container>
      <SearchBox>
        <FontAwesomeIcon icon={faSearch} />
        <InputSearch type="text" placeholder="Buscar" />
      </SearchBox>
      <div className="d-flex align-items-center">
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={20}
          width={35}
          handleDiameter={16}
          offColor={shade(0.2, colors.background)}
          onColor={colors.primary}
        />

        <SuccessButton className="mh2">Nuevo</SuccessButton>

        <Dropdown>
          <DropdownHeader>
            <Profile className="ml2">
              <img src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg" alt="Profile"/>
            </Profile>
          </DropdownHeader>
          <DropdownMenuRight>
            <Link to="/account" className="dropdown-item">{user.name}</Link>
            <a onClick={(e) => {e.preventDefault(); handleLoggout()}} className="dropdown-item">Cerrar sesión</a>
          </DropdownMenuRight>
        </Dropdown>
      </div>
    </Container>
  );
};

export default Header;