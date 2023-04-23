import React, {useEffect, useState} from 'react';
import { SimpleGrid, Wrap, WrapItem, Box, Image, Text, Grid, Heading, Select, Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList, } from "@chakra-ui/react";
    import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom';

import bgPractices from './../../../assets/images/bgPractices.svg';
import bgPractices2 from './../../../assets/images/bgPractices_2.svg';
import bgPractices3 from './../../../assets/images/bgPractices_3.svg';
// import Atmakriyayoga from '../Atmakriyayoga';

const MenuPractices = (props) => {
    console.log(props.subpage);

    const titleSubpage = () => {

        if (props.subpage == 'atmakriyayoga') {
            return 'ATMA KRIYA YOGA';
        }

        if (props.subpage == 'omchanting') {
            return 'OM CHANTING';
        }

        if (props.subpage == 'soundhealing') {
            return 'SOUND HEALING';
        }

    }
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

    const [hoverIndex, setHoverIndex] = useState(null);

    const handleMouseEnter = (index) => {
      setHoverIndex(index);
    };
  
    const handleMouseLeave = () => {
      setHoverIndex(null);
    };
    const [selectedOption, setSelectedOption] = useState("");
    const selectedOptionBg = practicesList.find((item) => item.title === selectedOption)?.background;

    let navigate = useNavigate();
    const handleLinkClick = (event) => {
          const to = `/${(props.selectedLanguage ? props.selectedLanguage+'/' : '')}practices/${event.currentTarget.getAttribute('to')}`;
      
          navigate(to,{replace: false})
    }

    const currentSubpage = practicesList.find((item) => item.url == props.subpage);
    const buttonBg = currentSubpage ? `url(${currentSubpage.img}), ${currentSubpage.background}` : '';
    console.log(currentSubpage);
    console.log(buttonBg);
    return (
        <>
            <Grid
                templateColumns={{
                    base: "repeat(1, 1fr)",
                    xl: "repeat(3, 1fr)",
                }}
                gap={5}
                maxW="888px"
                m="0 auto"
                pl={{ base: "15px", md: "none" }}
                pr={{ base: "15px", md: "none" }}
                display={{base: 'none', xl: 'grid'}}
                mt={{base: "20px", md: "152px"}}
            >
                {practicesList.map((item, index) => (
                    <Box
                        key={item.index}
                        className="practicesList__practicItem"
                        position="relative"
                        height={!props.subpage ? {base: '140px', xl: '280px'} : '80px'}
                        sx={{
                        background: item.background
                        }}
                        opacity={props.subpage == item.url || hoverIndex == index ? '1' : '0.5'}
                        transition="opacity 0.3s ease-in-out"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to={`/${(props.selectedLanguage ? props.selectedLanguage+'/' : '')}practices/${item.url}`} style={{zIndex: 3, position: 'relative', display: 'block', height: '100%', width: '100%'}} >
                            <Image
                                src={item.img}
                                w="100%"
                                objectFit="cover"
                                objectPosition="top right"
                                width="100%"
                                height="100%"
                
                            />
                            <Text textAlign="center" position="absolute" width="100%" bottom={{base: '30px', xl: '27px'}}>{item.title}</Text>
                        </Link>
                    </Box>
                ))}
            </Grid>
            <Box m="0 auto" w="200px" display={{base: 'block', xl: 'none'}}>
                <Menu computePositionOnMount={false} eventListeners={false} flip="false" shouldUpdatePosition="false" placement="bottom-start">
                    <MenuButton as={Button} 
                        rightIcon={<ChevronDownIcon />}
                        bg={buttonBg}
                        bgSize="cover"
                        bgPosition="0% 0%"
                        overflow="hidden"
                        w="200px"
                        h="54px"
                        borderRadius="0"
                    >
                        {titleSubpage()}
                    </MenuButton>
                    <MenuList borderRadius="0" textAlign="center" p="0" m="0" computePositionOnMount={false} w="200px"  eventListeners={false} flip="false" portal={false}>
                        {practicesList.map((item, index) => (
                            <MenuItem
                                to={item.url}
                                key={index}
                                bg={`url('${item.img}'), ${item.background}`}
                                bgSize="cover"
                                bgPosition="0% 0%"
                                overflow="hidden"
                                onClick={handleLinkClick}
                                w="200px"
                                h="54px"
                                p="21px 24px"
                                textAlign="center"
                            >
                                <Text textAlign="center" margin="0 auto">{item.title}</Text>
                            </MenuItem>
                        ))}

                    </MenuList>
                </Menu>
            </Box>

        </>
    );
}   

export default MenuPractices; 