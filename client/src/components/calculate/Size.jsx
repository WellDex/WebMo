import React from 'react';
import { CountFunction } from './Size/CountFunction';
import { ModelAndLanguage } from './Size/ModelAndLanguage';
import { ResultSize } from './Size/ResultSize';

export const Size = ({ state, inputSizeValueHandler, inputModelDataValueHandler, calculateFormula }) => {
    return (
        <div className='mg-bottom'>
            <ModelAndLanguage  modelData={state} inputModelDataValueHandler={inputModelDataValueHandler}/>
            <CountFunction projectFormulaData={state} inputSizeValueHandler={inputSizeValueHandler}/>
            <ResultSize projectFormulaData={state} inputModelDataValueHandler={inputModelDataValueHandler}/>
            <div className='txt-al-center mg-top'>
                <a className="waves-effect waves-light btn-small" onClick={calculateFormula}>Рассчитать размер</a>
            </div>
        </div>
    );
};