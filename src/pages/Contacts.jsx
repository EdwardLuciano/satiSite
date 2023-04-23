import React, {useEffect, useState} from 'react';
import { SimpleGrid, Wrap, WrapItem, Box, Image, Text, Grid, Heading } from "@chakra-ui/react";

import logo from './../assets/images/Sati_LogoForWhiteBG.svg';
import { useLocation, Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Contacts(componentProps) {
  const {lang} = useParams();
  const languages = ['ru','en'];
    const defaultLanguage = languages[0];
    const selectedLanguage = languages.find(elem => elem === lang);
      const lgng = (selectedLanguage ? selectedLanguage : defaultLanguage);
   const [events, setEvents] = useState([]); 
 // const [preload, setPreload] = useState(true)
  const locate = useLocation();
  const apiURL = `http://46.19.67.46:1338/api/events?sort=date${(lgng == 'en') ? '&locale=en' : ''}`;
console.log(componentProps)
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
      {/* <div className="logo"><img src={logo} /></div> */}
      <Heading
      fontSize="36px"
      textAlign="center"
      display={{ base: "block", xl: "none" }}
      p="0 15px"
      mb="32px"
      mt={{base: "81px", md: "152px"}}
    >
                        {(!selectedLanguage || selectedLanguage == 'ru' ? 'Контакты' : 'Contacts')}

    </Heading>
    <Box        
        maxW="888px"
        m="0 auto"
        pl={{ base: "15px", md: "none" }}
        pr={{ base: "15px", md: "none" }}
        mt={{base: "0px", md: "152px"}}
      >
    <Heading  mb={{base: "24px", xl: "32px"}} fontSize="32px" color="#9C597C" fontWeight="400">
    {(!selectedLanguage || selectedLanguage == 'ru' ? 'Менеджмент и Концерты' : 'Management and concerts')}

        </Heading>
    <Text css={{ "p": { marginBottom: "1rem" } }}>
          <p>    {(!selectedLanguage || selectedLanguage == 'ru' ? 'Антон Глушнёв' : 'Anton Glushnev')}</p>
          <p>+79959218354 (Telegram/WhatsApp)</p>
          <p><a href="mailto:saticeo@gmail.com">saticeo@gmail.com</a></p>
        </Text>

        <Heading pt={{base: "44px", xl: "48px"}} mb={{base: "24px", xl: "32px"}} fontSize="32px" color="#9C597C" fontWeight="400">
        PR        </Heading>
    <Text css={{ "p": { marginBottom: "1rem" } }}>
    <p>    {(!selectedLanguage || selectedLanguage == 'ru' ? 'Лена Дикевич' : 'Lena Dikevich')}</p>

          <p>+79254422650</p>
          <p><a href="mailto:pr.satikazanova@gmail.com">pr.satikazanova@gmail.com</a></p>
        </Text>

        <Heading pt={{base: "44px", xl: "48px"}} mb={{base: "24px", xl: "32px"}} fontSize="32px" color="#9C597C" fontWeight="400">
             {(!selectedLanguage || selectedLanguage == 'ru' ? 'Реклама' : 'Advertisement')}    </Heading>
        <Text css={{ "p": { marginBottom: "1rem" } }}>
        <p>    {(!selectedLanguage || selectedLanguage == 'ru' ? 'Юлия Кривопустова' : 'Julia Krivopustova')}</p>
          <p>+79153218518</p>
          <p><a href="mailto:organicwoman@mail.ru">organicwoman@mail.ru</a></p>
        </Text>
        <Heading pt={{base: "44px", xl: "48px"}} mb={{base: "24px", xl: "32px"}} fontSize="32px" color="#9C597C" fontWeight="400">
         {(!selectedLanguage || selectedLanguage == 'ru' ? 'Информация по практикам' : 'Information on practices')}     </Heading>
        <Text css={{ "p": { marginBottom: "1rem" } }}>
          <p> {(!selectedLanguage || selectedLanguage == 'ru' ? 'Полина Сирота' : 'Polina Sirota')}</p>
          <p>+79250057631</p>
          <p><a href="mailto:ps.satikazanova@gmail.com">ps.satikazanova@gmail.com</a></p>
        </Text>
        </Box>
    </>
  );
}
export default Contacts;