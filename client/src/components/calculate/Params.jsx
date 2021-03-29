import React from 'react';
import { Atributes } from './Params/Atributes';
import { NameAndDescription } from './Params/NameAndDescription';
import { TypeAndGeneral } from './Params/TypeAndGeneral';

export const Params = (props) => {
    return (
        <div className='mg-bottom'>
            <NameAndDescription />
            <TypeAndGeneral />
            <Atributes />
            <div className='txt-al-center mg-top'>
                <a className="waves-effect waves-light btn-small mg-right">Рассчитать</a>
                <a className="waves-effect waves-light btn-small">Сохранить</a>
            </div>
        </div>
    );
};