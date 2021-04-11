import React from 'react';
import { Form } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

export const Atributes = ({ state, inputParamsValueHandler }) => {
    return (
        <Form>
            <Form.Label>Атрибуты стоимости:</Form.Label>
            <Form.Group>
                <Form.Label>Cложность и надежность продукта:</Form.Label>
                <Form.Control onChange={inputParamsValueHandler} value={state.params.CPLX} as="select" name="CPLX" size="sm" custom>
                    <option value={0.63}>Очень низкий (0.63)</option>
                    <option value={0.85}>Низкий (0.85)</option>
                    <option value={1.00}>Номинальный (1.00)</option>
                    <option value={1.3}>Высокий (1.3)</option>
                    <option value={1.67}>Очень высокий (1.67)</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Сложность програмноаппаротной среды:</Form.Label>
                <Form.Control onChange={inputParamsValueHandler} value={state.params.PDIF} as="select" name="PDIF" size="sm" custom>
                    <option value={0.75}>Очень низкий (0.75)</option>
                    <option value={0.87}>Низкий (0.87)</option>
                    <option value={1.00}>Номинальный (1.00)</option>
                    <option value={1.21}>Высокий (1.21)</option>
                    <option value={1.41}>Очень высокий (1.41)</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Квалификация разработчиков</Form.Label>
                <Form.Control onChange={inputParamsValueHandler} value={state.params.PERS} as="select" name="PERS" size="sm" custom>
                    <option value={1.55}>Очень низкий (1.55)</option>
                    <option value={1.35}>Низкий (1.35)</option>
                    <option value={1.00}>Номинальный (1.00)</option>
                    <option value={0.75}>Высокий (0.75)</option>
                    <option value={0.58}>Очень высокий (0.58)</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Опыт работы:</Form.Label>
                <Form.Control onChange={inputParamsValueHandler} value={state.params.PREX} as="select" name="PREX" size="sm" custom>
                    <option value={1.35}>Очень низкий (1.35)</option>
                    <option value={1.19}>Низкий (1.19)</option>
                    <option value={1.00}>Номинальный (1.00)</option>
                    <option value={0.87}>Высокий (0.87)</option>
                    <option value={0.71}>Очень высокий (0.71)</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Инструментальная поддержка и среда проекта:</Form.Label>
                <Form.Control onChange={inputParamsValueHandler} value={state.params.FCIL} as="select" name="FCIL" size="sm" custom>
                    <option value={1.36}>Очень низкий (1.36)</option>
                    <option value={1.13}>Низкий (1.13)</option>
                    <option value={1.00}>Номинальный (1.00)</option>
                    <option value={0.86}>Высокий (0.86)</option>
                    <option value={0.68}>Очень высокий (0.68)</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Ограничение сроков работы:</Form.Label>
                <Form.Control onChange={inputParamsValueHandler} value={state.params.SCED} as="select" name="SCED" size="sm" custom>
                    <option value={1.35}>Очень низкий (1.35)</option>
                    <option value={1.15}>Низкий (1.15)</option>
                    <option value={1.00}>Номинальный (1.00)</option>
                    <option value={1.05}>Высокий (1.05)</option>
                    <option value={1.10}>Очень высокий (1.10)</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Необходимое повторное использование:</Form.Label>
                <Form.Control onChange={inputParamsValueHandler} value={state.params.RUSE} as="select" name="RUSE" size="sm" custom>
                    <option value={1.00}>Номинальный (1.00)</option>
                    <option value={1.25}>Высокий (1.25)</option>
                    <option value={1.48}>Очень высокий (1.48)</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Шкала сотрудничества (TEAM):</Form.Label>
                <Form.Control onChange={inputParamsValueHandler} value={state.params.TEAM} as="select" name="TEAM" size="sm" custom>
                    <option value={1.45}>Очень низкий (1.45)</option>
                    <option value={1.31}>Низкий (1.31)</option>
                    <option value={1.00}>Номинальный (1.00)</option>
                    <option value={0.75}>Высокий (0.75)</option>
                    <option value={0.62}>Очень высокий (0.62)</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Эффективность процесса:</Form.Label>
                <Form.Control onChange={inputParamsValueHandler} value={state.params.PEFF} as="select" name="PEFF" size="sm" custom>
                    <option value={1.36}>Очень низкий (1.36)</option>
                    <option value={1.20}>Низкий (1.20)</option>
                    <option value={1.00}>Номинальный (1.00)</option>
                    <option value={0.86}>Высокий (0.86)</option>
                    <option value={0.65}>Очень высокий (0.65)</option>
                </Form.Control>
            </Form.Group>
        </Form>
    );
};

Atributes.propTypes = {
    state: PropTypes.object,
    inputParamsValueHandler: PropTypes.func
}