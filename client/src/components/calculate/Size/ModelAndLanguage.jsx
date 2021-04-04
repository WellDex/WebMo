import React from 'react';
import { Form } from 'react-bootstrap';

export const ModelAndLanguage = ({ modelData, inputModelDataValueHandler }) => {

    const { LanguageCoding } = modelData.size
    
    return (
        <Form className='dflex-center gap' >
            <Form.Group >
                <Form.Label>Язык программирования:</Form.Label>
                <Form.Control value={LanguageCoding} onChange={inputModelDataValueHandler} as="select" size="sm" custom name="LanguageCoding">
                    <option value="JavaScript">JavaScript</option>
                    <option value="PHP">PHP</option>
                    <option value="C#">C#</option>
                    <option value="Ruby">Ruby</option>
                    <option value="Java">Java</option>
                </Form.Control>
            </Form.Group>
        </Form>
    );
};