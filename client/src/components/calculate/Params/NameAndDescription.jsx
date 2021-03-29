import React from 'react';
import { Form } from 'react-bootstrap';

export const NameAndDescription = (props) => {
    return (
        <Form>
            <Form.Group>
                <Form.Label>Название проекта:</Form.Label>
                <Form.Control />
                <Form.Label>Описание проекта:</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
    );
};