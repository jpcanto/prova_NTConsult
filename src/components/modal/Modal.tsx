import React, { useEffect, useState } from 'react';
import { ModalContainer, ModalDescription, ModalFade, ModalWalppaper } from './Modal.styled';

import { IModal } from './Modal.interface';
import { useHistory } from 'react-router-dom';

const Modal: React.FC<IModal> = (
    { type, show, image, name, gender, created, films, starships, episode_id, release_date, title, opening_crawl }
) => {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => setShowModal(show), [show]);

    const history = useHistory();

    function handleClick(path: string) {
        history.push(`/${path}`);
    }

    return <>
        {
            showModal
                ? <ModalFade className="modal-fade">
                    <ModalContainer>
                        <ModalWalppaper image={image} />
                        <ModalDescription>
                            <div className="flex">
                                <p>{type === 'characters' ? created : release_date}</p>
                                {type === 'characters'
                                    ? <p>Films: <span>{films}</span></p>
                                    : <p><span>{title}</span></p>
                                }
                            </div>
                            {type === 'characters'
                                ? <>
                                    <p>Name: {name}</p>
                                    <p>Gender: {gender}</p>
                                    <p className="star-ships">Starships: {starships}</p>
                                </>
                                : <>
                                    <p className="star-ships">Episode: {episode_id}</p>
                                    <div className="description">
                                        {opening_crawl}
                                    </div>
                                </>
                            }

                            <div className="flex">
                                <p>To see more about {type === 'characters' ? 'films' : 'characters'}:</p>
                                <p className="link" onClick={() => handleClick(type === 'characters' ? 'films' : 'characters')}>Click here</p>
                            </div>
                        </ModalDescription>
                    </ModalContainer>
                </ModalFade>
                : null
        }
    </>

}

export default Modal;