import React, {useEffect, useState} from 'react';
import { Box, Flex, Heading, Text, Image, IconButton } from "@chakra-ui/react";
import { FaShare } from "react-icons/fa";
import Imagetravis from './../Rectangle 1.png';
import { useLocation, Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from "react-markdown";
import Markdown from 'markdown-to-jsx';



const News = () => {

  const {lang} = useParams();
  const languages = ['ru','en'];
    const defaultLanguage = languages[0];
    const selectedLanguage = languages.find(elem => elem === lang);
      const lgng = (selectedLanguage ? selectedLanguage : defaultLanguage);

  const markdown = '# Hello, world!\n\nThis is a **Markdown** document rendered with *Remark*.';
  const text = `Om Tryambakam Yajamahe\nSugandhim Pushtivardhanam\nUrvarukamiva Bandhanan\nMrityor Mukshiya Maamritat\n\nKarpur Gauram Karunavataram |\nSansara Saram Bhujagendra Haram ||\nSada Vasantam Hridayaravinde |\nBhavam Bhavani Sahitam Namami ||\n\nОм Namaste astu Bhagavan Vishveshvaraya Mahadevaya Trayambakaya Tripurantakaya Trikagni – Kalaya Kalagni – Rudraya Nilakantaya Mrityunjayaya Sarvesvaraya Sadhashivaya Sriman Mahadevaya Namah!\n\nOm Hrum Jum Sah\n\nOm Namah Shivaya\nShivaya Nama Om\n\nChitananda Roopam\nShivoham Shivoham\n\nBrahma Muraari\nSura Arcita Linggam\nNirmala Bhashita\nShobhita Linggam\nJanmaja Duhkha\nVinaashaka Linggam\nTat Prannamaami\nSadaashiva Linggam`;

  const formattedText = text.replace(/\n\n/g, '\n\n\n\n').replace(/\n/g, '\n\n');
  
  console.log(formattedText);
  const mk = "You are the one\n\nFor me\nFor me\nFor me\nFormidaaable ";
    
  const newss = [
    {
      id: 1,
      title: "Новость 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod ultrices velit, a vehicula ante. Ut vel semper velit, eu malesuada sapien. Sed bibendum erat sit amet ipsum malesuada feugiat. Praesent porta dui vitae mi fringilla dictum. Fusce id nisi turpis.Sed bibendum erat sit amet ipsum malesuada feugiat. Praesent porta dui vitae mi fringilla dictum. Fusce id nisi turpis.  ",
      imageUrl:
        "https://picsum.photos/500/500?random=1",
    },
    {
      id: 2,
      title: "Новость 2",
      description:
        "Sed sit amet tortor fringilla, consequat ipsum id, congue mi. Morbi a leo nec nisl bibendum facilisis. Fusce sodales, libero a luctus euismod, nulla dolor pellentesque enim, sit amet consectetur nunc ex sed justo. Sed congue mi ante, sed pulvinar nisi dictum ut. Sed bibendum erat sit amet ipsum malesuada feugiat. Praesent porta dui vitae mi fringilla dictum. Fusce id nisi turpis. ",
      imageUrl:
        "https://picsum.photos/500/500?random=2",
    },
    {
      id: 3,
      title: "Новость 3",
      description:
        "Aliquam pulvinar diam ut arcu semper ullamcorper. Aenean ultrices dolor et suscipit hendrerit. Donec vitae luctus lectus. Vestibulum vel mi arcu. Vestibulum a ante ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed bibendum erat sit amet ipsum malesuada feugiat. Praesent porta dui vitae mi fringilla dictum. Fusce id nisi turpis. ",
      imageUrl:
        "https://picsum.photos/500/500?random=3",
    },
  ];
    const locate = useLocation();

 const apiURL = `http://46.19.67.46:1338/api/news?populate=*`;
   const [news, setNews] = useState([]); 

  useEffect(() => {
        
      getNews();
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
    getNews();
  }, [locate.pathname]);
 
  const getNews = () => {
    axios.get(apiURL)
    .then(function (response) {
      setNews(response.data.data);
        console.log(response.data.data)
      //setPreload(false);

    })
    .catch(function (error) {
      console.log('error');
    })
  }

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
            {(!selectedLanguage || selectedLanguage == 'ru' ? 'Новости' : 'News')}

    </Heading>
    <Flex maxW="719px" mx="auto" flexDirection="column" mt="20px"
     mt={{base: "20px", md: "152px"}}>
      {news.map((newsItem,index) => (

        <Flex key={newsItem.index} pb={index !== news.length - 1 ? "24px" : 0} mb={index !== news.length - 1 ? "24px" : 0} borderBottom={index !== news.length - 1 ? "1px solid" : 0} borderColor={index !== news.length - 1 ? "black" : 0} pl={{base: "15px", md: "0px"}} pr={{base: "15px", md: "0px"}}>
          <Image
            src={'http://46.19.67.46:1338'+newsItem.attributes.img.data.attributes.formats.small.url}
            alt={newsItem.title}
            boxSize="240px"
            objectFit="cover"
            flex="0 0 240px"
            mr="34px"
            display={{base: "none", md: "block"}}
 aspectRatio={1}

          />
          <Flex flexDirection="column" justifyContent="center">
            <Heading fontSize={{base: "18px", sm: "24px"}} mb="12px">
              {newsItem.attributes.title}
            </Heading>
            <Text mb="20px" fontSize={{base: "14px", sm: "16px"}}>
            
            <Markdown className="wrr">{newsItem.attributes.description.replace(/\n/gi, "&nbsp; \n")}</Markdown>


            </Text>

              <Box>
                <Link to="#" fontWeight="700">Поделиться</Link>
              </Box>

          </Flex>
        </Flex>
      ))}
    </Flex>
    </>
  );
};

export default News;
