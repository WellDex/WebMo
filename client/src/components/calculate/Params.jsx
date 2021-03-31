import React from 'react';
import { Atributes } from './Params/Atributes';
import { NameAndDescription } from './Params/NameAndDescription';
import { TypeAndGeneral } from './Params/TypeAndGeneral';

export const Params = ({ params, projectData, constants, valiidationError, inputProjectDataValueHandler, inputParamsValueHandler }) => {
    return (
        <div className='mg-bottom'>
            <NameAndDescription 
            projectData={projectData} 
            inputProjectDataValueHandler={inputProjectDataValueHandler} 
            valiidationError={valiidationError}
            />

            <TypeAndGeneral 
            constants={constants} 
            inputConstantsValueHandler={inputParamsValueHandler}
            />

            <Atributes 
            inputParamsValueHandler={inputParamsValueHandler} 
            attributes={params} 
            />
        </div>
    );
};