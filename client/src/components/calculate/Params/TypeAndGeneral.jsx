import React from 'react';
import { Form } from 'react-bootstrap';

export const TypeAndGeneral = ({ state, inputConstantsValueHandler }) => {

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
                <Form.Control onChange={inputConstantsValueHandler} value={state.A} type="number" step={0.1} name="A"/>
                <Form.Label>B:</Form.Label>
                <Form.Control onChange={inputConstantsValueHandler} value={state.B} type="number" step={0.1} name="B"/>
                <Form.Label>P1:</Form.Label>
                <Form.Control onChange={inputConstantsValueHandler} value={state.P1} type="number" step={0.1} name="P1"/>
                <Form.Label>P2:</Form.Label>
                <Form.Control onChange={inputConstantsValueHandler} value={state.P2} type="number" step={0.1} name="P2"/>
            </Form.Group>
        </Form>
    );
};