import { SimpleGrid, Wrap, WrapItem, Box, Image, Text, Grid, Heading, Link } from "@chakra-ui/react";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { FaPlay } from "react-icons/fa";
import video from './../../../assets/images/Frame 40.png';

const Soundhealing = (componentProps) => {
  console.log(componentProps.events);
    const locate = useLocation();

 const apiURL = `http://46.19.67.46:1338/api/musics?sort=rank:asc&populate=*`;
   const [music, setMusic] = useState([]); 

  
  useEffect(() => {
        
      getMusic();
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
    getMusic();
  }, [locate.pathname]);
 
  const getMusic = () => {
    axios.get(apiURL)
    .then(function (response) {
      setMusic(response.data.data);
        console.log(response.data.data)
      //setPreload(false);

    })
    .catch(function (error) {
      console.log('error');
    })
  }

  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const practicesList = [
    {
      title: 'ATMA KRIYA YOGA',
      img: 'bgPractices',
      enabled: true,
      url: 'atmakriyayoga',
      background: 'linear-gradient(140.11deg, #FFCACA -15.42%, #FFAAE7 155.58%)',
    },
    {
      title: 'OM CHANTING',
      img: '',
      enabled: true,
      url: 'omchanting',
      background: 'linear-gradient(139.42deg, #FFECAA -15.8%, #72FF70 148.12%)',
    },
    {
      title: 'SOUND HEALING',
      img: 'bgPractices3',
      enabled: true,
      url: 'soundhealing',
      background: 'linear-gradient(140.11deg, #CAF9FF -15.42%, #AAB3FF 155.58%)'
    }
  ];

  console.log(music);
  return (
    <>
      <Box        
        maxW="888px"
        m="0 auto"
        pl={{ base: "15px", md: "none" }}
        pr={{ base: "15px", md: "none" }}
      >
        <Heading pt={{base: "44px", xl: "48px"}} mb={{base: "24px", xl: "32px"}} fontSize="32px" color="#9C597C" fontWeight="400">
        SOUND HEALING и МАНТРА МЕДИТАЦИЯ может проходить как отдельно, так и быть частью групповой медитации Ом-чантинг.
        </Heading>
        <Text css={{ "p": { marginBottom: "1rem" } }}>
          <p>Проводником в этом удивительном путешествии от ума к сердцу выступает Сати. Мистическое звуковое сопровождение обеспечивает талантливый друг и коллега Сати по проекту SATI ETHNICA Ильдар Гиридхари.</p>
          <p>Ильдар наполнит пространство и всех участников своей неземной музыкой, исполненной на особенных инструментах:<br></br>
ханг-драм, калимба, хрустальная арфа, колокольчики Нада, дудук, тибетские чаши и другие.
Каждый из инструментов уникален своим гармонизирующим и целебным воздействием на тело, ум и сознание человека.</p>
          <p>Под это волшебное звучание Сати расскажет о значении сакральных мантр, об их трансформирующих свойствах и увлечет вас в мир мантра-медитации, где каждый присутствующий становится активным участником.</p>
        </Text>

      </Box>


</>
  );
};

export default Soundhealing;
