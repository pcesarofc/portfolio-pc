import React from 'react';
import Form from './Form';
import Map from './Map';
import $ from 'jquery';

const Contact = () => {

    React.useEffect(() => {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    }, [])

    return <main className="contact-container">
        <Form />
        <Map />
    </main>
}
export default Contact