import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from './../assets/images/Sati_Logo_Orange.png';
import Burger from './../assets/images/material-symbols_menu.svg';
import Close from './../assets/images/material-symbols_close.svg';
import { Box, Flex, Heading, Text, Image, IconButton, Link, Img } from "@chakra-ui/react";
import ig from './../icons/instagram.svg';
import vk from './../icons/vk.svg';
import fb from './../icons/fb.svg';
import yt from './../icons/yt.svg';
import spotify from './../icons/spotify.svg';
import am from './../icons/am.svg';
import { useNavigate } from "react-router-dom";

const Header = ({language,page}) => {

    let navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
    console.log(page)

  useEffect(() => {
  if (menuOpen) {
    document.documentElement.classList.add('menuOpen');
    } else {
      document.documentElement.classList.remove('menuOpen');
      }
}, [menuOpen]);

const handleLinkClick = (event) => {
  setMenuOpen(false);
    const to = event.currentTarget.getAttribute('to');
    console.log(to); // Выведет значение атрибута "to" в консоль
  // Далее нужный код для перехода по ссылке

    navigate(to,{replace: false})
}

const menuItems = [
  {
    label: {ru: 'Новости', en: 'News'},
    link: '/news'
  },
  {
    label: {ru: 'Афиша', en: 'Events'},
    link: '/afisha'
  },
  {
    label: {ru: 'Музыка', en: 'Music'},
    link: '/music'
  },
  {
    label: {ru: 'Практики', en: 'Practices'},
    link: '/practices'
  },
  {
    label: {ru: 'Мантры', en: 'Mantras'},
    link: '/mantras'
  },
  {
    label: {ru: 'Контакты', en: 'Contacts'},
    link: '/contacts'
  },
];
  return (
    <header className="header">
      <div className="header__logo">
        <Link to={`/${language ? language : ''}`} onClick={handleLinkClick}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="header__menu-toggle_container">
        <button className="header__menu-toggle" onClick={toggleMenu}>
          {menuOpen ? (
            <img src={Close} />
          ) : (
            <img src={Burger} />
          )}
        </button>
      </div>

      <Box 
        className={`header__nav ${menuOpen ? 'is-active' : ''}`}      
        sx={{
          fontFamily: "Comfortaa",
          fontWeight: 400,
              textTransform: 'uppercase',
        }}
        fontSize="14px"
      >
        <ul className="header__menu">
        <Box className='' display="flex" flexDirection={{base: "column", xl: "row"}} alignItems="center" pt={{base: "16vh", xl: 0}}
          sx={{
            "@media (max-height: 670px) and (max-width: 1280px)": {
              paddingTop: "5vh",
            },
            "@media (max-height: 600px) and (max-width: 1280px)": {
              paddingTop: "0",
            },
          }}
        >
          {menuItems.map((menuItem) => (
            <li key={menuItem.link} className="header__menu-item">
              <Link to={`${language ? '/' + language + menuItem.link : menuItem.link}`}
                onClick={handleLinkClick}
              >
                {(language == 'ru' || !language ? menuItem.label.ru : menuItem.label.en)}
              </Link>
            </li>
          ))}
        </Box>

{/* Тел */}
      <Box className="footer" maxW="1240px" p="44px 15px 30px 15px" mx="auto" display={{base: "flex", xl: "none"}} flexDirection="column" justifyContent="space-between" width="100%" p="0">
        <Box className="header__language-switcher _mobile" mb={{base: "0", sm: "0"}} pt="24px"       
        sx={{
          fontFamily: "Comfortaa",
          fontWeight: 300,
              textTransform: 'uppercase',
        }}>
          <Link to="/ru" className={`switchLngBtn ${(language == 'ru' || !language) ? 'is-active' : ''}`} onClick={handleLinkClick}>RU</Link>
          <Link to="/en" className={`switchLngBtn ${(language == 'en') ? 'is-active' : ''}`} onClick={handleLinkClick}>EN</Link>
        </Box>

        <Box className="socialItems" pt="24px">
          <div className="socialItems__item">
            <a target="_blank" href="https://instagram.com/satikazanova/"><img src={ig} /></a>
          </div>
          <div className="socialItems__item">
            <a target="_blank" href="https://vk.com/satiethnica"><img src={vk} /></a>
          </div>
          <div className="socialItems__item">
            <a target="_blank" href="https://www.facebook.com/satiethnica"><img src={fb} /></a>
          </div>
          <div className="socialItems__item">
            <a target="_blank" href="https://www.youtube.com/satiethnica"><img src={yt} /></a>
          </div>
          <div className="socialItems__item">
            <a target="_blank" href="https://open.spotify.com/artist/14ZoXuWN171LDoT1jahX2h?si=SZZhD9rkST2f8egNOUgNWQ"><img src={spotify} /></a>
          </div>
          <div className="socialItems__item">
            <a target="_blank" href="https://music.apple.com/us/artist/sati-ethnica/1185935165"><img src={am} /></a>
          </div>
        </Box>

        <Box className="footer__contacts" display="block" pb="30px">
          <Box className="email" pt="24px">
            <a href="mailto:hello@sati.show">hello@sati.show</a>
          </Box>
        </Box>
      </Box>
        </ul>

      </Box>
{/* Десктоп */}

          <Box className="footer" maxW="1240px" p="44px 15px 30px 15px" mx="auto" display={{base: "none", xl: "flex"}} flexDirection={{base: "column", sm: "row-reverse"}} justifyContent="space-between" m="0" p="0">
        <Box className="header__language-switcher _mobile" mb={{base: "0.5rem", sm: "0"}}         
        sx={{
          fontFamily: "Comfortaa",
          fontWeight: 300,
              textTransform: 'uppercase',
        }}>
          <Link to="/ru" className={`switchLngBtn ${(language == 'ru' || !language) ? 'is-active' : ''}`} onClick={handleLinkClick}>RU</Link>
          <Link to="/en" className={`switchLngBtn ${(language == 'en') ? 'is-active' : ''}`} onClick={handleLinkClick}>EN</Link>
        </Box>

        <div className="socialItems">
          <div className="socialItems__item">
            <a target="_blank" href="https://instagram.com/satikazanova/"><Img src={ig} w="24px" h="24px" /></a>
          </div>
          <div className="socialItems__item">
            <a target="_blank" href="https://vk.com/satiethnica"><Img src={vk} w="24px" h="24px" /></a>
          </div>
          <div className="socialItems__item">
            <a target="_blank" href="https://www.facebook.com/satiethnica"><Img src={fb} w="24px" h="24px" /></a>
          </div>
          <div className="socialItems__item">
            <a target="_blank" href="https://www.youtube.com/satiethnica"><Img src={yt} w="24px" h="24px" /></a>
          </div>
          <div className="socialItems__item">
            <a target="_blank" href="https://open.spotify.com/artist/14ZoXuWN171LDoT1jahX2h?si=SZZhD9rkST2f8egNOUgNWQ"><Img src={spotify} w="24px" h="24px" /></a>
          </div>
          <div className="socialItems__item">
            <a target="_blank" href="https://music.apple.com/us/artist/sati-ethnica/1185935165"><Img src={am} w="24px" h="24px" /></a>
          </div>
        </div>

      </Box>

    </header>
  );
};

export default Header;