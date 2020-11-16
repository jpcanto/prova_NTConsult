import React, { useEffect, useState } from 'react';
import axios from 'axios';

import URL_API from '../../environment';
import Modal from '../../components/modal/Modal';

import { Card, CardBox, CardBoxContainer, CardDescription, CardWallpapper } from '../../components/styled/Card';

import characterWalpapperImage from '../../assets/img/thumb/character_default_image.jpg';
import characterImage from '../../assets/img/thumb/character_default_image-2.jpg';
import likeIcon from '../../assets/img/thumb/like.png';
import unlikeIcon from '../../assets/img/thumb/unlike.png';
import infoIcon from '../../assets/img/thumb/info.png';
import wallpapper from '../../assets/img/thumb/wallpapper.jpg';

import { IndexKind } from 'typescript';
import { ICharacters } from './Characters.interface';
import { TargetElement } from '@testing-library/user-event';

const Characters: React.FC = () => {
    const [characters, setCharacters] = useState<ICharacters[]>([]);
    const [modal, setModal] = useState<boolean>(false);
    const [modalId, setModalId] = useState<number>();

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

    function handleModal(target: any) {
        setModal(target.matches('.button') || target.matches('img') ? true : false);
    }

    return <>
        <CardWallpapper role="characters" image={wallpapper} onClick={ev => handleModal(ev.target)}>
            <CardBoxContainer main={false}>
                {
                    characters.map((character, index) => {
                        return <div key={index}>
                            {
                                modalId === index
                                    ? <Modal
                                        show={modal}
                                        type="characters"
                                        image={characterWalpapperImage}
                                        name={character.name}
                                        gender={character.gender}
                                        created={character.created}
                                        films={character.films.length}
                                        starships={character.starships.length}
                                    />
                                    : null
                            }
                            <CardBox
                                width="22vw"
                                onMouseEnter={ev => handleHover(ev, index, true)}
                                onMouseLeave={ev => handleHover(ev, index, false)}>
                                <Card
                                    width="-webkit-fill-available"
                                    image={characterImage}
                                    border="top">
                                </Card>
                                {character.showDescription
                                    ?
                                    <CardDescription>
                                        <div className="area-button">
                                            <div className="button">
                                                <img src={likeIcon} />
                                            </div>
                                            <div className="button">
                                                <img src={unlikeIcon} />
                                            </div>
                                            <div className="button" onClick={ev => (setModalId(index), handleModal(ev.target))}>
                                                <img src={infoIcon} />
                                            </div>
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
                        </div>
                    })
                }
            </CardBoxContainer>
        </CardWallpapper>
    </>;
}

export default Characters;
