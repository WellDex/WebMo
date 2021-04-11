import React from 'react';
import { Form } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

export const TypeAndGeneral = ({ state, inputConstantsValueHandler }) => {

    return (
        <Form>
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

TypeAndGeneral.propTypes = {
    state: PropTypes.object,
    inputConstantsValueHandler: PropTypes.func,
}