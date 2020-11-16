import React from 'react';

import { NotFoundContainer } from './NotFound';
import notFound from '../../assets/img/thumb/404.png';



const NotFound: React.FC = () => {
    return <NotFoundContainer image={notFound} />;
}

export default NotFound;