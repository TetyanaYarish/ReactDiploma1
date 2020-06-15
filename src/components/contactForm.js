import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function ContactForm() {
    const [name, setName] = useState('');
    const history = useHistory();

    function onNameChange(event) {
        setName(event.target.value);
    }

    function onSubmit() {
        history.push('/contact/' + name);
    }

    return (
        <>
            <input placeholder="Type your favorite color :" value={name} onChange={onNameChange} className="body-row"/>
            <button onClick={onSubmit}  className="body-list" >SUBMIT</button>
        </>
    );
}

export default ContactForm;
