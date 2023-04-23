import { SimpleGrid, Wrap, WrapItem, Box, Image, Text, Grid, Heading } from "@chakra-ui/react";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import Imagetravis from './../Rectangle 1.png';
import { FaPlay } from "react-icons/fa";
import bgPractices from './../assets/images/bgPractices.svg';
import bgPractices2 from './../assets/images/bgPractices_2.svg';
import bgPractices3 from './../assets/images/bgPractices_3.svg';

const Music = (componentProps) => {

  const {lang} = useParams();
  const languages = ['ru','en'];
    const defaultLanguage = languages[0];
    const selectedLanguage = languages.find(elem => elem === lang);
      const lgng = (selectedLanguage ? selectedLanguage : defaultLanguage);

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
      img: bgPractices,
      enabled: true,
      url: 'atmakriyayoga',
      background: 'linear-gradient(140.11deg, #FFCACA -15.42%, #FFAAE7 155.58%)',
    },
    {
      title: 'OM CHANTING',
      img: bgPractices2,
      enabled: true,
      url: 'omchanting',
      background: 'linear-gradient(139.42deg, #FFECAA -15.8%, #72FF70 148.12%)',
    },
    {
      title: 'SOUND HEALING',
      img: bgPractices3,
      enabled: true,
      url: 'soundhealing',
      background: 'linear-gradient(140.11deg, #CAF9FF -15.42%, #AAB3FF 155.58%)'
    }
  ];
  const { practice } = useParams();
  console.log(practice);
  console.log(music);
  return (
    <>
    <Heading
      fontSize="36px"
      textAlign="center"
      display={{ base: "block", xl: "none" }}
      p="0 15px"
      mb="32px"
      mt={{base: "81px", md: "152px"}}
    >
                  {(!selectedLanguage || selectedLanguage == 'ru' ? 'Практики' : 'Practices')}

    </Heading>

    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={5}
      maxW="888px"
      m="0 auto"
      pl={{ base: "15px", md: "none" }}
      pr={{ base: "15px", md: "none" }}
      mt={{base: "0px", md: "152px"}}
    >
      {practicesList.map((item, index) => (
        <Box
          key={item.index}
          className="practicesList__practicItem"
          position="relative"
          height={{base: '140px', xl: '280px'}}
          sx={{
            background: item.background
          }}
        >
          <Link to={`${item.url}`} style={{zIndex: 3, position: 'relative', width: '100%', height: '100%', display: 'block'}} width="100%" height="100%" display="block">
            <Image
              src={item.img}
              w="100%"
              opacity={hoverIndex === index ? 0.7 : 1}
              transition="opacity 0.3s ease-in-out"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              objectFit="cover"
              objectPosition="top right"
              width="100%"
              height="100%"

            />
            <Text textAlign="center" position="absolute" width="100%" bottom={{base: '30px', xl: '27px'}}>{item.title}</Text>
          </Link>
          {hoverIndex === index && (
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              cursor="pointer"
              zIndex="4"
              onMouseEnter={() => handleMouseEnter(index)}
            >
            </Box>
          )}
        </Box>
      ))}
    </Grid>
    {/* <Outlet /> */}
</>
  );
};

export default Music;
