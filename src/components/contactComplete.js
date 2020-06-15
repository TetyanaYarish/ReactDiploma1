import React from 'react';
import { useParams } from 'react-router-dom';

function ContactComplete() {
    const params = useParams();

    return (
        <>
         Your favorite color is  - {params.name}!
        </>
    );

}

export default ContactComplete;
