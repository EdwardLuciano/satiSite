import { SimpleGrid, Wrap, WrapItem, Box, Image, Text, Grid, Heading } from "@chakra-ui/react";
import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import { useLocation, Link, useParams } from 'react-router-dom';
import Imagetravis from './../Rectangle 1.png';
import { FaPlay } from "react-icons/fa";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import ReactMarkdown from "react-markdown";
import Markdown from 'markdown-to-jsx';

const Mantras = (componentProps) => {

  const {lang} = useParams();
  const languages = ['ru','en'];
    const defaultLanguage = languages[0];
    const selectedLanguage = languages.find(elem => elem === lang);
      const lgng = (selectedLanguage ? selectedLanguage : defaultLanguage);

//  console.log(componentProps.events);
  const locate = useLocation();
  const { id } = useParams();

  const apiURL = `http://46.19.67.46:1338/api/mantras?populate=*`;

   const [mantras, setMantras] = useState([]); 
   const [selectedMantra, setSelectedMantra] = useState();

   const options = {
    disableParsingRawHTML: true,
  };
   useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "http://46.19.67.46:1338/api/mantras?populate=*"
      );
      const mantrasData = response.data.data;
        console.log(mantrasData)
      const mantrasWithCover = await Promise.all(
        mantrasData.map(async (mantra) => {
          const coverResponse = await axios.get(
            `http://46.19.67.46:1338/api/musics/${mantra.attributes.music.data.id}?populate=*`
          );
          return {
            ...mantra,
            cover: coverResponse.data.data.attributes.cover.data.attributes.formats.small.url,
          };
        })
      );

      setMantras(mantrasWithCover);
      setSelectedMantra(mantrasWithCover.find(mantra => mantra.id == id));
    }

    fetchData();
  }, []);


    const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };


  console.log(mantras[0]);
  console.log(mantras.map((mantra, index) => index == 0 && mantra.attributes.music.data.attributes.title));
  

  function DataTabs({ data }) {
    return ( 
      <Tabs isFitted style={{ position: "relative", zIndex: "10000000" }}>
        <TabList overflowX="auto" overflowY="hidden" whiteSpace="nowrap" pb="2px" borderBottom="0px"
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "&::-webkit-scrollbar-thumb": {
              display: "none",
            },
            "&::-webkit-scrollbar-track": {
              display: "none",
            },
            scrollbarWidth: "none",
          }}
        >
          {data.map((tab, index) => (
            <Tab key={index} >{tab.title}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((tab, index) => (
            <TabPanel p={4} key={index}>
              <Markdown className="wrr">{tab.mantra.replace(/\n/gi, "&nbsp; \n")}</Markdown>
            </TabPanel>
          ))}
        </TabPanels>
          <Box>
          
          </Box>
        {/* CSS-стили для затемнения последней вкладки */}
        <style jsx>{`
          .chakra-tabs__tablist::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 20px;
            height: 100%;
            background-image: linear-gradient(
              to right,
              rgba(255, 255, 255, 0),
              rgba(255, 255, 255, 1)
            );
          }
          
          .chakra-tabs__tab {
            position: relative;

          }
          .chakra-tabs__tab[aria-selected="false"] { 
            border-bottom: 2px solid #e2e8f0;
          }

        `}</style>
      </Tabs>
    );
  }
  
  return (
    <>
    <Heading
      fontSize="36px"
      textAlign="center"
      display={{ base: "block", xl: "none" }}
      p="0 15px"
      pb="0"
      mb="12px"
      mt={{base: "81px", md: "152px"}}
      
    >
                  {(!selectedLanguage || selectedLanguage == 'ru' ? 'Мантры' : 'Mantras')}

    </Heading>
    <Heading
      textAlign="center"
      display={{ base: "block", xl: "none" }}
      p="0px 0px"
      mb="20px"
      as="h6"
      fontSize="16px"
    >
                        {(!selectedLanguage || selectedLanguage == 'ru' ? 'Альбом ' : 'Album ')} 
 {mantras.map((mantra, index) => (mantra.id == id || !id && index == 0) && mantra.attributes.music.data.attributes.title)}
    </Heading>
    
    <Box
      maxW="888px"
      m="0 auto"
      pl={{ base: "15px", md: "none" }}
      pr={{ base: "15px", md: "none" }}
      position="relative" zIndex="10000"
      mt={{base: "0px", md: "152px"}}
    >
      <Box display="flex" overflowX="auto" className="mantrasMenu" mb="10px">
      {mantras.map((item, index) => {

        // const [avatar, setAvatar] = useState(null);

      return (

        <Box mr={2} mb={2}>
          
          <Link to={`/mantras/${item.id}`}> 
          <Image src={`http://46.19.67.46:1338${item.cover}`}
                        borderRadius="3px"
                        maxW="55px"
                        maxH="55px"
                        opacity={(item.id == id || !id && index==0 ? '1' : '0.6')}
                        >

            </Image> 

          </Link>
          </Box>
      )

      })}
    
    </Box>

    
{ id && mantras.map((mantra, index) => (
mantra.id == id && <DataTabs data={mantra.attributes.mantras} />
))}

{ !id && mantras.map((mantra, index) => (
index==0 && <DataTabs data={mantra.attributes.mantras} />
))}
    
    </Box>

</>
  );
};

export default Mantras;
