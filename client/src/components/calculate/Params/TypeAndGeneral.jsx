import React from 'react';
import { Form } from 'react-bootstrap';

export const TypeAndGeneral = (props) => {

    return (
        <Form>
            <Form.Group>
                <Form.Label>Тип проекта:</Form.Label>
                <Form.Control as="select" size="sm" custom>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            <Form.Label>Общие параметры:</Form.Label>
            <Form.Group>
                <Form.Label>A:</Form.Label>
                <Form.Control type="number" step={0.1}/>
                <Form.Label>B:</Form.Label>
                <Form.Control type="number" step={0.1}/>
                <Form.Label>P1:</Form.Label>
                <Form.Control type="number" step={0.1}/>
                <Form.Label>P2:</Form.Label>
                <Form.Control type="number" step={0.1}/>
            </Form.Group>
        </Form>
    );
};