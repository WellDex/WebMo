import React from 'react';
import { Atributes } from './Params/Atributes';
import { NameAndDescription } from './Params/NameAndDescription';
import { TypeAndGeneral } from './Params/TypeAndGeneral';

export const Params = ({ attributes, inputValueHandler }) => {
    return (
        <div className='mg-bottom'>
            <NameAndDescription inputValueHandler={inputValueHandler} attributes={attributes}/>
            <TypeAndGeneral inputValueHandler={inputValueHandler} attributes={attributes}/>
            <Atributes inputValueHandler={inputValueHandler} attributes={attributes} />
            <div className='txt-al-center mg-top'>
                <a className="waves-effect waves-light btn-small mg-right">Рассчитать</a>
                <a className="waves-effect waves-light btn-small">Сохранить</a>
            </div>
        </div>
    );
};