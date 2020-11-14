import React, { useEffect, useState } from 'react';
import axios from 'axios';

import URL_API from '../../environment';
import { Card, CardBox, CardBoxContainer, CardDescription, CardWallpapper } from '../../components/styled/Card';
import default_image from '../../assets/img/thumb/character_default_image-2.jpg';
import wallpapper from '../../assets/img/thumb/wallpapper.jpg';
import { IndexKind } from 'typescript';

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
    showDescription: Boolean
}

const Characters: React.FC = (props: any) => {
    const [characters, setCharacters] = useState<ICharacters[]>([]);

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

    function handleHover(ev: React.MouseEvent, index: IndexKind, type: Boolean) {
        const hasVisibleDescription = [...characters].find(c => c.showDescription);
        const newChars = [...characters];

        if (hasVisibleDescription)
            hasVisibleDescription.showDescription = false;

        newChars[index] = { ...newChars[index], showDescription: type };
        setCharacters(newChars);
    }

    return <>
        <CardWallpapper image={wallpapper}>
            <CardBoxContainer main={false}>
                {
                    characters.map((character, index) => {
                        return (
                            <CardBox
                                width="22vw"
                                key={index}
                                onMouseEnter={ev => handleHover(ev, index, true)}
                                onMouseLeave={ev => handleHover(ev, index, false)}>
                                <Card
                                    width="-webkit-fill-available"
                                    image={default_image}
                                    border="top">
                                </Card>
                                {character.showDescription
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
        </CardWallpapper>
    </>;
}

export default Characters;
