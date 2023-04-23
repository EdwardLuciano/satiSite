import { SimpleGrid, Wrap, WrapItem, Box, Image, Text, Grid, Heading } from "@chakra-ui/react";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useLocation, Link, useParams } from 'react-router-dom';
import Imagetravis from './../Rectangle 1.png';
import { FaPlay } from "react-icons/fa";
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
           {(!selectedLanguage || selectedLanguage == 'ru' ? 'Музыка' : 'Music')}

    </Heading>

    <Grid
      templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={5}
      maxW="888px"
      m="0 auto"
      pl={{ base: "15px", md: "none" }}
      pr={{ base: "15px", md: "none" }}
      mt={{base: "20px", md: "152px"}}
    >
      {music.map((item, index) => (
        <Box
          key={item.id}
          className="col-lg-3 col-md-6 col-sm-12"
          position="relative"
        >
          <Link to={item.attributes.link} style={{zIndex: 3, position: 'relative'}}>
            <Image
              src={`http://46.19.67.46:1338${item.attributes.cover.data.attributes.formats.small.url}`}
              w="100%"
              opacity={hoverIndex === index ? 0.7 : 1}
              transition="opacity 0.3s ease-in-out"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}

            />
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
                      <Link to={item.attributes.link} style={{zIndex: 3, position: 'relative'}}>

              <FaPlay size="48px" color="white" />
              </Link>
            </Box>
          )}
        </Box>
      ))}
    </Grid>

</>
  );
};

export default Music;
