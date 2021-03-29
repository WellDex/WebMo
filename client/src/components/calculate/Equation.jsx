import React from 'react';
import { Form } from 'react-bootstrap';

export const Equation = (props) => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Изменение параметров:</Form.Label>
                <Form.Group>
                    <Form.Label>A:</Form.Label>
                    <Form.Control />
                    <Form.Label>B:</Form.Label>
                    <Form.Control />
                    <Form.Label>P1:</Form.Label>
                    <Form.Control />
                    <Form.Label>P2:</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Form.Group>
        </Form>
    );
};