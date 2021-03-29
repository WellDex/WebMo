import React from 'react';
import { Form } from 'react-bootstrap';

export const ModelAndLanguage = (props) => {
    return (
        <Form className='dflex-center gap' >
            <Form.Group >
                <Form.Label>Модель оценки размера:</Form.Label>
                <Form.Control as="select" size="sm" custom>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Group >
                <Form.Label>Язык программирования:</Form.Label>
                <Form.Control as="select" size="sm" custom>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
        </Form>
    );
};