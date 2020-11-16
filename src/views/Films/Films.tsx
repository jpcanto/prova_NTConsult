import React, { useEffect, useState } from 'react';
import axios from 'axios';

import URL_API from '../../environment';
import Modal from '../../components/modal/Modal';

import { Card, CardBox, CardBoxContainer, CardDescription, CardWallpapper } from '../../components/styled/Card';

import filmWallpapperImage from '../../assets/img/thumb/film_default_image.jpg';
import characterImage from '../../assets/img/thumb/film_default_image-2.jpg';
import likeIcon from '../../assets/img/thumb/like.png';
import unlikeIcon from '../../assets/img/thumb/unlike.png';
import infoIcon from '../../assets/img/thumb/info.png';
import wallpapper from '../../assets/img/thumb/wallpapper.jpg';

import { IndexKind } from 'typescript';
import { IFilms } from './Films.interface';

const Films: React.FC = (props: any) => {
  const [films, setFilms] = useState<IFilms[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [modalId, setModalId] = useState<number>();

  useEffect(() => {
    const url = `https://cors-anywhere.herokuapp.com/${URL_API.getFilms}`;
    async function getFilms() {
      try {
        const { data } = await axios.get(url);
        setFilms(data.results);
      } catch (error) {
        console.log('erro na requisição: ', url, ' Error: ', error);
      }
    }
    getFilms();
  }, []);

  function handleHover(ev: React.MouseEvent, index: IndexKind, type: Boolean) {
    const hasVisibleDescription = [...films].find(f => f.showDescription);
    const newFilms = [...films];

    if (hasVisibleDescription)
      hasVisibleDescription.showDescription = false;

    newFilms[index] = { ...newFilms[index], showDescription: type };
    setFilms(newFilms);
  }

  function handleModal(target: any) {
    setModal(target.matches('.button') || target.matches('img') ? true : false);
  }

  return <>
    <CardWallpapper role="films" image={wallpapper} onClick={ev => handleModal(ev.target)}>
      <CardBoxContainer main={false} role="cardBox">
        {
          films.map((film, index) => {
            return <div key={index}>
              {
                modalId === index
                  ? <Modal
                    show={modal}
                    type="films"
                    image={filmWallpapperImage}
                    episode_id={film.episode_id}
                    release_date={film.release_date}
                    title={film.title}
                    opening_crawl={film.opening_crawl}
                    created={film.created}
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
                {film.showDescription
                  ?
                  <CardDescription>
                    <div className="area-button">
                      <div className="button">
                        <img src={likeIcon} />
                      </div>
                      <div className="button">
                        <img src={unlikeIcon} />
                      </div>
                      <div
                        data-testid="action-button"
                        className="button"
                        onClick={ev => (setModalId(index), handleModal(ev.target))}
                      >
                        <img src={infoIcon} />
                      </div>
                    </div>
                    <div className="area-info">
                      <div className="info">{`Episode: ${film.episode_id}`}</div>
                    </div>
                    <div className="area-tags">
                      <div className="tag">{film.title}</div>
                      <div className="tag">{film.created}</div>
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

export default Films;
