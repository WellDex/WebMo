import React from 'react';
import { CountFunction } from './Size/CountFunction';
import { ModelAndLanguage } from './Size/ModelAndLanguage';
import { ResultSize } from './Size/ResultSize';

export const Size = ({ state, inputSizeValueHandler }) => {
    return (
        <div className='mg-bottom'>
            <ModelAndLanguage />
            <CountFunction projectFormulaData={state} inputSizeValueHandler={inputSizeValueHandler}/>
            <ResultSize projectFormulaData={state}/>
            <div className='txt-al-center mg-top'>
                <a className="waves-effect waves-light btn-small">Рассчитать размер</a>
            </div>
        </div>
    );
};