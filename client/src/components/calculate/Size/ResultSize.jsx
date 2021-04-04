import React from 'react';

export const ResultSize = ({ projectFormulaData, inputModelDataValueHandler }) => {

    const { sizeWebObject, countStringCode } = projectFormulaData.result.size

    return (
        <div className='mg-top'>
            <div className='dflex-sb'>
                <span>Размер WEB Objects:</span>
                <input value={sizeWebObject} onChange={inputModelDataValueHandler} type='number' name="sizeWebObject"/>
            </div>
            <div className='dflex-sb'>
                <span>В условных строчках кода:</span>
                <input value={countStringCode} onChange={inputModelDataValueHandler} type='number' name="countStringCode"/>
            </div>
        </div>
    );
};