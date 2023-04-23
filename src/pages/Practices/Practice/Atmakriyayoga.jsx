import { SimpleGrid, Wrap, WrapItem, Box, Image, Text, Grid, Heading, Link } from "@chakra-ui/react";
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import { FaPlay } from "react-icons/fa";
import video from './../../../assets/images/Frame 40.png';

const Atmakriyayoga = (componentProps) => {
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
          Atma Kriya Yoga — это техники древней йоги и медитации, специально адаптированные для современного человека.
        </Heading>
        <Text css={{ "p": { marginBottom: "1rem" } }}>
          <p>Включает в себя комплекс техник: мантры, асаны, пранаямы, мудры, визуализации, чакровая медитация, а также групповая практика — OM Chanting.</p>
          <p>Atma Kriya Yoga раскрывает истинную природу человека, объединяя ум, тело и сознание в единое целое.</p>
          <p>Известно, что во время практик медитации активизируются альфа-волны головного мозга, что приводит нервную систему в состояние спокойствия, замедляет процессы старения, нормализуют гормональный фон и раскрывает внутреннюю энергию.</p>
          <p>Уникальность Atma Kriya Yoga состоит в инициации - Шактипат, что с древнего санскрита переводится как «передача энергии».</p>
          <p>Именно Шактипат заключает в себе сакральную силу тысячелетней традиции передачи знаний от Мастера к ученику.</p>
          <p style={{fontWeight: "bold"}}>Такое невозможно «прогуглить» или вычитать из книг.</p>
          <p>Каждая из техник Atma Kriya Yoga раскрывает определенный тип БХАКТИ - трансформирующую силу безусловной любви и преданности.</p>
          <p>Atma Kriya Yoga также устраняет карму прошлых жизней - это значительно меняет жизненные события и даже судьбу человека.</p>
          <p>Atma Kriya Yoga идеально подходит как для новичков, так и для тех, кто уже давно практикует медитацию.</p>
          <p>Семинар проходит два дня и включает в себя обязательное проведение групповой медитации OM-Chanting.</p>
        </Text>
        <Heading pt={{base: "44px", xl: "48px"}} mb="16px" fontSize="32px" color="#9C597C" fontWeight="400">
          В семинар входит
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
            <Heading fontSize="16px" mb="8px">Практики многомерной медитации</Heading>
            <Text>
              Практики многомерной медитации работают с энергетическими центрами (чакрами), что повышает осознанность на всех уровнях
            </Text>
          </Box>
          <Box backgroundColor="#FFE7EA" p="16px">
            <Heading fontSize="16px" mb="8px">Пранаяма</Heading>
            <Text>
              Позволяет управлять жизненной энергией и учит контролю ума при помощи дыхательных упражнений            </Text>
          </Box>
          <Box backgroundColor="#FFE7EA" p="16px">
            <Heading fontSize="16px" mb="8px">Сакральные мантры</Heading>
            <Text>
              На санскрите и посвящение в одну из них           
            </Text>
          </Box>
          <Box backgroundColor="#FFE7EA" p="16px">
            <Heading fontSize="16px" mb="8px">Мудры</Heading>
            <Text>
            Мудры (особое положение пальцев или тела): помогают сбалансировать 5 элементов в теле и усиливают жизненную энергию        
            </Text>
          </Box>
          <Box backgroundColor="#FFE7EA" p="16px">
            <Heading fontSize="16px" mb="8px">Om Сhanting</Heading>
            <Text>
            Это йога звука, форма активной групповой медитации, во время которой участники поют мантру ОМ, сидя особым образом в кругу. Практика активирует процессы самоисцеления, преобразует негативную энергию в позитивную, помогает достичь физического, ментального, эмоционального и духовного равновесия        
            </Text>
          </Box>
          <Box backgroundColor="#FFE7EA" p="16px">
            <Heading fontSize="16px" mb="8px">Шактипат или получение инициации в Atma Kriya Yoga</Heading>
            <Text>
            Является показателем преемственности знаний, благодаря которому можно эффективно и безопасно заниматься практиками ATMA KRIYA YOGA         
            </Text>
          </Box>
        </Grid>
        <Box>
        <Heading mb="16px" fontSize="32px" color="#9C597C" fontWeight="400">
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

export default Atmakriyayoga;
