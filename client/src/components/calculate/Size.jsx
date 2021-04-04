import React from 'react';
import { CountFunction } from './Size/CountFunction';
import { ModelAndLanguage } from './Size/ModelAndLanguage';

export const Size = ({ state, inputSizeValueHandler, inputModelDataValueHandler }) => {
    return (
        <div className='mg-bottom'>
            <ModelAndLanguage  modelData={state} inputModelDataValueHandler={inputModelDataValueHandler}/>
            <CountFunction projectFormulaData={state} inputSizeValueHandler={inputSizeValueHandler}/>
        </div>
    );
};