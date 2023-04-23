import React, {useEffect, useState} from 'react';
import { SimpleGrid, Wrap, WrapItem, Box, Image, Text, Grid, Heading } from "@chakra-ui/react";

import logo from './../assets/images/GlavClubSatiOOPS-76.jpg';
import { useLocation, Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Afisha(componentProps) {
  const {lang} = useParams();
  const languages = ['ru','en'];
    const defaultLanguage = languages[0];
    const selectedLanguage = languages.find(elem => elem === lang);
      const lgng = (selectedLanguage ? selectedLanguage : defaultLanguage);
   const [events, setEvents] = useState([]); 
 // const [preload, setPreload] = useState(true)
  const locate = useLocation();
  const apiURL = `http://46.19.67.46:1338/api/events?sort=date${(lgng == 'en') ? '&locale=en' : ''}`;

  useEffect(() => {
        
      getEvents();
      const onPageLoad = () => {
       // setPreload(false);
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
        response.data.data.map((event, key) => {
            const d = new Date(event.attributes.date)

            const year = d.getFullYear()
            const date = d.getUTCDate()
            const monthIndex = d.getMonth()

            console.log(Date.parse('2023-03-08'))

            if(year <= new Date().getFullYear()) {
             // setEvents
              console.log(12)
            }
          }
        );
        console.log(response.data.data)
      //setPreload(false);

    })
    .catch(function (error) {
      console.log('error');
    })
  }
function formatDate(newDate,lang) {
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
    const monthName = (lang == 'en' ? months.en[d.getMonth()] : months.ru[d.getMonth()])
    const dayName = (lang == 'en' ? days.en[d.getUTCDay()] : days.ru[d.getUTCDay()]) // Thu
    //const time = `${d.getHours()}:${(d.getMinutes()<10 ?'0':'') + d.getMinutes()}`
    const formatted = `${dayName}, ${date} ${monthName}`
    return formatted.toString()
  }
  return (
    <>
      <Box className="logo"      mt={{base: "81px", md: "152px"}}
><img src={logo} /></Box>
      <Heading
      fontSize={{base: "18px", md: "24px"}}
      textAlign="center"
      p="0 15px"
      mb="32px"
      
    >
      {(!selectedLanguage || selectedLanguage == 'ru' ? 'Ближайшие мероприятия' : 'Upcoming events')}
    </Heading>
      <div className="events">
        {events.map((event, key)=> (

          <div className="events__event" key={key}>
            <div className="event__info">
              <div className="event__info_date">{formatDate(new Date(event.attributes.date),lang)+(event.attributes.time ? ' '+event.attributes.time : '')}</div>
              <div className="event__info_title">{event.attributes.title}</div>
              <div className="event__info_city">{event.attributes.city}{(event.attributes.place ? ', '+event.attributes.place : '')}</div>
            </div>
            <div className="event__actions">
              <a className={"btn_buyTickets"+(!event.attributes.buttonActive ? " btn_buyTickets_disabled" : "")} href={(event.attributes.buttonActive ? event.attributes.link : "")} onClick={(e) => !event.attributes.buttonActive ? e.preventDefault() : ""}>{(lang == 'en' ? 'Buy tickets' : 'Купить билеты')}</a>
            </div>
            {/* <div className="line"></div> */}
          </div>
        ))}
      </div>
    </>
  );
}
export default Afisha;