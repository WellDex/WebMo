import React from 'react';
import { Form } from 'react-bootstrap';

export const ResultSize = (props) => {
    return (
        <div className='mg-top'>
            <div className='dflex-sb'>
                <span>Размер WEB Objects:</span>
                <input type='text' />
            </div>
            <div className='dflex-sb'>
                <span>В условных строчках кода:</span>
                <input type='text' />
            </div>
        </div>
    );
};