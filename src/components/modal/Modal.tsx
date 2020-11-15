import React, { useEffect, useState } from 'react';
import { ModalContainer, ModalDescription, ModalFade, ModalWalppaper } from './Modal.styled';

import { IModal } from './Modal.interface';
import { useHistory } from 'react-router-dom';

const Modal: React.FC<IModal> = ({ show, image, name, gender, created, films, starships }) => {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => setShowModal(show), [show]);

    const history = useHistory();

    function handleClick(type: string) {
        history.push(`/${type}`);
    }

    return <>
        {
            showModal
                ? <ModalFade>
                    <ModalContainer>
                        <ModalWalppaper image={image} />
                        <ModalDescription>
                            <div className="flex">
                                <p>{created}</p>
                                <p className="films">Films: <span>{films}</span></p>
                            </div>
                            <p>Name: {name}</p>
                            <p>Gender: {gender}</p>
                            <p className="star-ships">Starships: {starships}</p>
                            <div className="flex">
                                <p>To see more about planets:</p>
                                <p className="link" onClick={() => handleClick('planets')}>Clique here</p>
                            </div>
                            <div className="flex">
                                <p>To see more about films:</p>
                                <p className="link" onClick={() => handleClick('films')}>Clique here</p>
                            </div>
                        </ModalDescription>
                    </ModalContainer>
                </ModalFade>
                : null
        }
    </>

}

export default Modal;