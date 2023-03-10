import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Center  } from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import logo from './logo.png';
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
} from 'react-router-dom';
import { useLocation, Link } from 'react-router-dom';


function App() {  
  const [events, setEvents] = useState([]); 
  const [preload, setPreload] = useState(true)
  const locate = useLocation();
  const apiURL = `https://admin.sati.show/api/events?sort=date${(locate.pathname == '/en') ? '&locale=en' : ''}`;
  console.log(locate.pathname);
  useEffect(() => {
        
      getEvents();
      const onPageLoad = () => {
        setPreload(false);
        // do something else
      };
      if (document.readyState === 'complete') {
        onPageLoad();
      } else {
        window.addEventListener('load', onPageLoad, false);
        // Remove the event listener when component unmounts
        return () => window.removeEventListener('load', onPageLoad);
      }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    getEvents();
  }, [locate.pathname]);
 
  const getEvents = () => {
    axios.get(apiURL)
    .then(function (response) {
      setEvents(response.data.data);
      //setPreload(false);

    })
    .catch(function (error) {
      console.log('error');
    })
  }

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

  const Page = ({language}) => {
    console.log(language);
    return (
      <div className="content">
        { preload &&
          <Center w='100vw' h='100vh' position='absolute' zIndex='10000' background='#0F1120'>
            <CircularProgress isIndeterminate color='#E64BB6' size='150px' thickness='4px' />
          </Center>
        } 
        <div className="internationalization">
          <div className="containerDefault">
            <Link to="/" className={'internationalization__locale'+(locate.pathname == '/' ? ' active' : '')}>RU</Link>
            <Link to="/en" className={'internationalization__locale'+(locate.pathname == '/en' ? ' active' : '')}>EN</Link>
          </div>
        </div>
        <div className="logo"><img src={logo} /></div>
        <div className="events">
          {events.map((event, key)=> (

            <div className="events__event" key={key}>
              <div className="event__info">
                <div className="event__info_date">{formatDate(new Date(event.attributes.date),language)+(event.attributes.time ? ' '+event.attributes.time : '')}</div>
                <div className="event__info_title">{event.attributes.title}</div>
                <div className="event__info_city">{event.attributes.city}{(event.attributes.place ? ', '+event.attributes.place : '')}</div>
              </div>
              <div className="event__actions">
                <a className={"btn_buyTickets"+(!event.attributes.buttonActive ? " btn_buyTickets_disabled" : "")} href={(event.attributes.buttonActive ? event.attributes.link : "")} onClick={(e) => !event.attributes.buttonActive ? e.preventDefault() : ""}>{(language == 'en' ? 'Buy tickets' : 'Купить билеты')}</a>
              </div>
              {/* <div className="line"></div> */}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page language='ru'/>} />
        <Route path="/en" element={<Page language='en'/>} />
      </Routes>
      <div className="footer">
        <div className="socialItems">
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
        </div>
        <div className="footer__contacts">
          <div className="email">
            <a href="mailto:hello@sati.show">hello@sati.show</a>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default App;
