import { SimpleGrid, Wrap, WrapItem, Box, Image, Text, Grid, Heading, Link } from "@chakra-ui/react";
import React, {useEffect, useState, Suspense} from 'react';
import axios from 'axios';
import { useLocation, useParams, useOutletContext, useOutlet } from 'react-router-dom';
import MenuPractices from './../../components/MenuPractices'
import { FaPlay } from "react-icons/fa";
import Header from './../../../../сomponents/Header';
// import Atmakriyayoga from './../Atmakriyayoga';
// import Omchanting from './../Omchanting';
// import Sounhealing from './../Soundhealing';

const Practice = ({sexs}) => {
    const { practice } = useParams();
    let selectedLanguasge = useOutletContext();

    console.log('222232');

    const {lang} = useParams();
    const languages = ['ru','en'];
      const defaultLanguage = languages[0];
      const selectedLanguage = languages.find(elem => elem === lang);
        const lgng = (selectedLanguage ? selectedLanguage : defaultLanguage);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const ComponentPr = React.lazy(() => import(`./../${capitalizeFirstLetter(practice)}`));
    
    return (
        <>

            <div className="content">
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
                <MenuPractices subpage={practice} selectedLanguage={selectedLanguage} 
                
                />
                <Suspense fallback={<Box maxW="888px"
                                        m="0 auto"
                                        pt={{base: "44px", xl: "48px"}}
                                        pl={{ base: "15px", md: "none" }}
                                        pr={{ base: "15px", md: "none" }}
                                    >
                                        Загрузка мантры...
                                    </Box>
                                    }
                                    >
                    <ComponentPr />
                </Suspense>
            </div>

        </>
    );
};

export default Practice;
