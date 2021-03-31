import React from 'react';
import { CountFunction } from './Size/CountFunction';
import { ModelAndLanguage } from './Size/ModelAndLanguage';
import { ResultSize } from './Size/ResultSize';

export const Size = ({ projectFormulaData }) => {
    return (
        <div className='mg-bottom'>
            <ModelAndLanguage />
            <CountFunction projectFormulaData={projectFormulaData}/>
            <ResultSize projectFormulaData={projectFormulaData}/>
            <div className='txt-al-center mg-top'>
                <a className="waves-effect waves-light btn-small">Рассчитать</a>
            </div>
        </div>
    );
};