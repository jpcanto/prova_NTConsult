import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import URL_API from '../../environment';
import { Card, CardBox, CardBoxContainer, CardContainer, CardDescription } from '../../components/styled/Card';
import default_image from '../../assets/img/thumb/character_default_image-2.jpg';

interface ICharacters {
    birth_year: String,
    created: String,
    edited: String,
    eye_color: String,
    films: [],
    gender: String,
    hair_color: String,
    height: String,
    homeworld: String,
    mass: String,
    name: String,
    skin_color: String,
    species: [],
    starships: [],
    url: String,
    vehicles: [],
}

const Characters: React.FC = (props: any) => {
    const [characters, setCharacters] = useState<ICharacters[]>([]);
    const [showDescription, setShowDescription] = useState<Boolean>(false);
    const [refs, setRefs] = useState<Object>({});

    useEffect(() => {
        const url = URL_API.getCharacters;
        async function getCharacters() {
            try {
                const { data } = await axios.get(url);
                setCharacters(data.results);
            } catch (error) {
                console.log('erro na requisição: ', url);
            }
        }
        getCharacters();
    }, []);

    function handleHover(ev: React.MouseEvent) {
        console.log(ev);
        console.log(showDescription);
        setShowDescription(!showDescription);
    }

    return <>
        <CardBoxContainer>
            {
                characters.map((character, index) => {
                    return (
                        <CardBox width="22vw" key={index}
                            onMouseEnter={() => setShowDescription(true)}
                            onMouseLeave={() => setShowDescription(false)}>
                            <Card
                                width="-webkit-fill-available"
                                image={default_image}
                                border="top">
                            </Card>
                            {showDescription
                                ?
                                <CardDescription>
                                    <div className="area-button">
                                        <img src="" className="button" />
                                        <img src="" className="button" />
                                        <img src="" className="button" />
                                    </div>
                                    <div className="area-info">
                                        <div className="info">{`Starships: ${character.starships.length}`}</div>
                                        <div className="info">Films: <span>{character.films.length}</span></div>
                                    </div>
                                    <div className="area-tags">
                                        <div className="tag">{character.name}</div>
                                        <div className="tag">{character.gender}</div>
                                        <div className="tag">{character.created}</div>
                                    </div>
                                </CardDescription>
                                : ''
                            }
                        </CardBox>
                    )
                })
            }
        </CardBoxContainer>
    </>;
}

export default Characters;
