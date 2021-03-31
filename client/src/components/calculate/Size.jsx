import React from 'react';
import { CountFunction } from './Size/CountFunction';
import { ModelAndLanguage } from './Size/ModelAndLanguage';
import { ResultSize } from './Size/ResultSize';

export const Size = (props) => {
    return (
        <div className='mg-bottom'>
            <ModelAndLanguage />
            <CountFunction />
            <ResultSize />
            <div className='txt-al-center mg-top'>
                <a className="waves-effect waves-light btn-small">Рассчитать размер</a>
            </div>
        </div>
    );
};