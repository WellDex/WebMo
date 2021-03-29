import React from 'react';
import { Table } from 'react-bootstrap';

export const CountFunction = (props) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Тип объекта</th>
                    <th>Низкий</th>
                    <th>Средний</th>
                    <th>Высокий</th>
                    <th>Всего</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Внутр. лог. об.</td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                </tr>
                <tr>
                    <td>Внешн. интерф.</td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                </tr>
                <tr>
                    <td>Внешний ввод</td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                </tr>
                <tr>
                    <td>Внешний вывод</td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                </tr>
                <tr>
                    <td>Внешний запрос</td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                    <td><input id="first_name" type="text" class="validate" /></td>
                </tr>
            </tbody>
        </Table>
    );
};