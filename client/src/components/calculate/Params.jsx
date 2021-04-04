import React from 'react';
import { Atributes } from './Params/Atributes';
import { NameAndDescription } from './Params/NameAndDescription';
import { TypeAndGeneral } from './Params/TypeAndGeneral';

export const Params = ({ state, valiidationError, inputProjectDataValueHandler, inputConstantsValueHandler, inputAtributesValueHandler }) => {
    return (
        <div className='mg-bottom'>
            <NameAndDescription 
            state={state}
            inputProjectDataValueHandler={inputProjectDataValueHandler} 
            valiidationError={valiidationError}
            />

            <TypeAndGeneral 
            state={state}
            inputConstantsValueHandler={inputConstantsValueHandler}
            />

            <Atributes 
            inputParamsValueHandler={inputAtributesValueHandler} 
            state={state}
            />
        </div>
    );
};