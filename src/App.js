import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Center  } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel, Box, Text, Grid, GridItem } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import logo from './assets/images/Sati_LogoForWhiteBG.svg';
import ig from './icons/instagram.svg';
import vk from './icons/vk.svg';
import fb from './icons/fb.svg';
import yt from './icons/yt.svg';
import spotify from './icons/spotify.svg';
import am from './icons/am.svg';
import './App.css';
import {
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import { useLocation, Link, useParams } from 'react-router-dom';

import Header from './сomponents/Header';
import Music from './pages/Music';
import Afisha from './pages/Afisha';
import News from './pages/News';
import Practices from './pages/Practices';
import Practice from './pages/Practices/Practice/Layout/Practice';
import Contacts from './pages/Contacts';
import Mantras from './pages/Mantras';
import UserList from './pages/UserList';






function App() {  
  // const [events, setEvents] = useState([]); 

  const [preload, setPreload] = useState(true)

  function formatDate(newDate,language) {
    const months = {}

    months.ru = {
      0: 'января',
      1: 'февраля',
      2: 'марта',
      3: 'апреля',
      4: 'мая',
      5: 'июня',
      6: 'июля',
      7: 'августа',
      8: 'сентября',
      9: 'октября',
      10: 'ноября',
      11: 'декабря',
    }
    months.en = {
      0: 'January',
      1: 'February',
      2: 'March',
      3: 'April',
      4: 'May',
      5: 'June',
      6: 'July',
      7: 'August',
      8: 'September',
      9: 'October',
      10: 'November',
      11: 'December',
    }
    console.log(months);
    const days = {}
    days.ru = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    days.en = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const d = newDate
    const year = d.getFullYear()
    const date = d.getUTCDate()
    const monthIndex = d.getMonth()
    const monthName = (language == 'en' ? months.en[d.getMonth()] : months.ru[d.getMonth()])
    const dayName = (language == 'en' ? days.en[d.getUTCDay()] : days.ru[d.getUTCDay()]) // Thu
    //const time = `${d.getHours()}:${(d.getMinutes()<10 ?'0':'') + d.getMinutes()}`
    const formatted = `${dayName}, ${date} ${monthName}`
    return formatted.toString()
  }
const Logo = (props) => {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  )
}
  const Page = ({language}) => {
    let { lang } = useParams();
    let { page } = useParams();
console.log(language);
    const languages = ['ru','en'];
    const defaultLanguage = languages[0];
    const selectedLanguage = languages.find(elem => elem === lang);
    const lgng = (selectedLanguage ? selectedLanguage : defaultLanguage);
    let Component = null;
    let componentProps = {};
    let props = {}
    props = {test: 'test'}
    return (
      <div className="content">
     {/*   { preload &&
          <Center w='100vw' h='100vh' position='absolute' zIndex='10000' background='#0F1120'>
            <CircularProgress isIndeterminate color='#E64BB6' size='150px' thickness='4px' />
          </Center>
        } */}
        {/*<div className="internationalization">
          <div className="containerDefault">
            <Link to="/" className={'internationalization__locale'+(locate.pathname == '/' ? ' active' : '')}>RU</Link>
            <Link to="/en" className={'internationalization__locale'+(locate.pathname == '/en' ? ' active' : '')}>EN</Link>
          </div>
        </div>*/}

        <Header language={(selectedLanguage)} page={page}/>
        {/* <Component {...componentProps}/> */}
        <Outlet context={selectedLanguage}/>
      </div>
    )
  }

  return (
    <div className="App" style={{margin: '0 auto', maxWidth: '1240px'}}>
      <div className='fixedBg'>
        <div className='fixedBg__img'></div>
      </div>
      <Routes>
        <Route exact path="/:lang?" element={<Page />}>
          <Route exact path="" index element={<Afisha />}/>
          <Route exact path="news" element={<News />}/>
          <Route exact path="afisha" element={<Afisha />}/>
          <Route exact path="music" element={<Music />}/>
          <Route exact path="practices" element={<Practices />}/>
          <Route exact path="practices/:practice" element={<Practice tari="tari"/>}/>
          <Route exact path="mantras" element={<Mantras />}/>
          <Route exact path="mantras/:id" element={<Mantras />}/>
          <Route exact path="contacts" element={<Contacts />}/>
          <Route exact path="chat" element={<UserList />}/>
        </Route>
        {/* <Route exact path="/:page" element={<Page />} />
        <Route exact path="/practices/atmakriyayoga" element={<Atmakriyayoga />} />
        <Route exact path="/:lang?/practices/atmakriyayoga" element={<Atmakriyayoga />} />
        <Route exact path="/practices/omchanting" element={<Omchanting />} />
        <Route exact path="/:lang?/practices/omchanting" element={<Omchanting />} />
        <Route exact path="/practices/soundhealing" element={<Sounhealing />} />
        <Route exact path="/:lang?/practices/soundhealing" element={<Sounhealing />} /> */}

      </Routes>
      <Box className="footer" maxW="1240px" p="44px 15px 30px 15px" mx="auto" flexDirection={{base: "column", sm: "row"}} justifyContent="center" alignItems="center" width="100%">
        <Box className="socialItems" display="none">
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
        <div className="footer__contacts">
          <Box className="email" pt="10px">
            <a href="mailto:hello@sati.show">hello@sati.show</a>
          </Box>
        </div>
      
      </Box>
    </div>
  );
}

export default App;
