import React from 'react';
import { Form } from 'react-bootstrap';

export const ResultSize = ({ projectFormulaData }) => {

    const { sizeWebObject, countStringCode } = projectFormulaData.result.size

    return (
        <div className='mg-top'>
            <div className='dflex-sb'>
                <span>Размер WEB Objects:</span>
                <input value={sizeWebObject} type='text'/>
            </div>
            <div className='dflex-sb'>
                <span>В условных строчках кода:</span>
                <input value={countStringCode} type='text' />
            </div>
        </div>
    );
};