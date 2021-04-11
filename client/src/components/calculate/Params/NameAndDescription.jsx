import React from 'react';
import { Form } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

export const NameAndDescription = ({ state, inputProjectDataValueHandler, valiidationError }) => {

    return (
        <Form>
            <Form.Group>
                <Form.Label>Название проекта:</Form.Label>
                <Form.Control onChange={inputProjectDataValueHandler} maxLength="150" value={state.projectName} name="projectName"/>
                {valiidationError && <div><span className="error-input-name">Введите название проекта</span> <br/></div> }
                <Form.Label>Описание проекта:</Form.Label>
                <Form.Control onChange={inputProjectDataValueHandler} maxLength="250" value={state.description} as="textarea" rows={3} name="description"/>
            </Form.Group>
        </Form>
    );
};

NameAndDescription.propTypes = {
    state: PropTypes.object,
    inputProjectDataValueHandler: PropTypes.func,
    valiidationError: PropTypes.string
}