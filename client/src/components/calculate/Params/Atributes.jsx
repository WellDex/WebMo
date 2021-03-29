import React from 'react';
import { Form } from 'react-bootstrap';

export const Atributes = (props) => {
    return (
        <Form>
            <Form.Label>Тип проекта:</Form.Label>
            <Form.Group>
                <Form.Label>Cложность и надежность продукта:</Form.Label>
                <Form.Control as="select" size="sm" custom>
                    <option>Очень низкий (0.63)</option>
                    <option>Низкий (0.85)</option>
                    <option>Номинальный (1.00)</option>
                    <option>Высокий (1.3)</option>
                    <option>Очень высокий (1.67)</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Сложность програмноаппаротной среды:</Form.Label>
                <Form.Control as="select" size="sm" custom>
                    <option>Очень низкий (0.75)</option>
                    <option>Низкий (0.87)</option>
                    <option>Номинальный (1.00)</option>
                    <option>Высокий (1.21)</option>
                    <option>Очень высокий (1.41)</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Квалификация разработчиков</Form.Label>
                <Form.Control as="select" size="sm" custom>
                    <option>Очень низкий (1.55)</option>
                    <option>Низкий (1.35)</option>
                    <option>Номинальный (1.00)</option>
                    <option>Высокий (0.75)</option>
                    <option>Очень высокий (0.58)</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Опыт работы:</Form.Label>
                <Form.Control as="select" size="sm" custom>
                    <option>Очень низкий (1.35)</option>
                    <option>Низкий (1.19)</option>
                    <option>Номинальный (1.00)</option>
                    <option>Высокий (0.87)</option>
                    <option>Очень высокий (0.71)</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Инструментальная поддержка и среда проекта:</Form.Label>
                <Form.Control as="select" size="sm" custom>
                    <option>Очень низкий (1.36)</option>
                    <option>Низкий (1.13)</option>
                    <option>Номинальный (1.00)</option>
                    <option>Высокий (0.86)</option>
                    <option>Очень высокий (0.68)</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Ограничение сроков работы:</Form.Label>
                <Form.Control as="select" size="sm" custom>
                    <option>Очень низкий (1.35)</option>
                    <option>Низкий (1.15)</option>
                    <option>Номинальный (1.00)</option>
                    <option>Высокий (1.05)</option>
                    <option>Очень высокий (1.10)</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Необходимое повторное использование:</Form.Label>
                <Form.Control as="select" size="sm" custom>
                    <option>Номинальный (1.00)</option>
                    <option>Высокий (1.25)</option>
                    <option>Очень высокий (1.48)</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Шкала сотрудничества (TEAM):</Form.Label>
                <Form.Control as="select" size="sm" custom>
                    <option>Очень низкий (1.45)</option>
                    <option>Низкий (1.31)</option>
                    <option>Номинальный (1.00)</option>
                    <option>Высокий (0.75)</option>
                    <option>Очень высокий (0.62)</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Эффективность процесса:</Form.Label>
                <Form.Control as="select" size="sm" custom>
                    <option>Очень низкий (1.36)</option>
                    <option>Низкий (1.20)</option>
                    <option>Номинальный (1.00)</option>
                    <option>Высокий (0.86)</option>
                    <option>Очень высокий (0.65)</option>
                </Form.Control>
            </Form.Group>
        </Form>
    );
};