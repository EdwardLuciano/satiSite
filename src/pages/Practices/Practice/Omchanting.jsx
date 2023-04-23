import { SimpleGrid, Wrap, WrapItem, Box, Image, Text, Grid, Heading, Link } from "@chakra-ui/react";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { FaPlay } from "react-icons/fa";
import video from './../../../assets/images/Frame 40.png';

const Omchanting = (componentProps) => {
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
        Om  Chanting является частью ATMA KRIYA YOGA, и может проводиться автономно.
        </Heading>
        <Text css={{ "p": { marginBottom: "1rem" } }}>
          <p>Эта, изначально древняя техника, сегодня практикуется в более чем 80 странах мира (проект «Города света).</p>
          <p>Om  Chanting - это йога звука, форма активной групповой медитации, во время которой участники поют мантру ОM, сидя особым образом в кругу.</p>
          <p>Мантра ОM имеет колоссальный трансформирующий эффект.</p>
        </Text>
        <Heading pt={{base: "44px", xl: "48px"}} mb="16px" fontSize="32px" color="#9C597C" fontWeight="400">
        Научно доказано, что многократное повторение мантры ОМ
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap={2}
          maxW="888px"
          m="0 auto"
          mb={{base: "24px", xl: "32px"}}
        >
          <Box backgroundColor="#FFE7EA" p="16px">
            <Heading fontSize="16px" mb="8px">Положительно меняет</Heading>
            <Text>
                биохимические реакции в головном мозге
            </Text>
          </Box>
          <Box backgroundColor="#FFE7EA" p="16px">
            <Heading fontSize="16px" mb="8px">Повышает</Heading>
            <Text>
              энергетический потенциал            </Text>
          </Box>
          <Box backgroundColor="#FFE7EA" p="16px">
            <Heading fontSize="16px" mb="8px">Успокаивает</Heading>
            <Text>
             нервную систему        
            </Text>
          </Box>
          <Box backgroundColor="#FFE7EA" p="16px">
            <Heading fontSize="16px" mb="8px">Полностью избавляет</Heading>
            <Text>
            от состояния депрессии и тревожности или же значительно ослабляет их симптомы        
            </Text>
          </Box>
          <Box backgroundColor="#FFE7EA" p="16px">
            <Heading fontSize="16px" mb="8px">Снижает гиперактиввность</Heading>
            <Text>
            снижает гиперактивность работы ума, что расслабляет все тело и избавляет от физических и психоэмоциональных блоков       
            </Text>
          </Box>
          <Box backgroundColor="#FFE7EA" p="16px">
            <Heading fontSize="16px" mb="8px">Мышление</Heading>
            <Text>
             из негативного меняется на позитивное     
            </Text>
          </Box>
          <Box backgroundColor="#FFE7EA" p="16px">
            <Heading fontSize="16px" mb="8px">Возвращает человека</Heading>
            <Text>
            к изначальной «заводской» настройке, когда естественным состоянием является легкость и радост    
            </Text>
          </Box>
          <Box backgroundColor="#FFE7EA" p="16px">
            <Heading fontSize="16px" mb="8px">Активизирует процессы</Heading>
            <Text>
             восстановления всего организма    
            </Text>
          </Box>
        </Grid>
        <Text css={{ "p": { marginBottom: "1rem" } }}>
          <p>Мы притягиваем в свою жизнь ситуации, людей и события, которые вибрируют с нами на одной частоте. Благодаря практике Om Chanting вы сможете повысить частоту этих вибрации, тем самым изменив качество своей жизни.</p>
          <p style={{fontWeight: 'bold'}}>Om Chanting — удивительный опыт проживания любви, в котором теряется ощущение пространства, времени и себя.</p>
          <p>Практика подходит абсолютно всем, у нее нет противопоказаний. Можно новичкам, беременным и просто желающим обрести гармонию и почувствовать себя легко и радостно. </p>
          <p>Время проведения 45 минут.</p>
        </Text>
        <Box>
        <Heading pt={{base: "44px", xl: "48px"}} mb="16px" fontSize="32px" color="#9C597C" fontWeight="400">
          Отзывы
        </Heading>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
            gap={2}
            maxW="888px"
            m="0 auto"
          >
            <Box>
              <Image src={video}>

              </Image>
            </Box>
            <Box>
              <Image src={video}>

              </Image>
            </Box>
          </Grid>
        </Box>
      </Box>


</>
  );
};

export default Omchanting;
