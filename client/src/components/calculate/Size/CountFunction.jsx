import React from 'react';
import { Table } from 'react-bootstrap';

export const CountFunction = ({ projectFormulaData, inputSizeValueHandler }) => {
    const { VnytrLogOb, VneshInterface, VneshVvod, VneshVuvod, VneshZapros } = projectFormulaData.size
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
                    <td><input value={VnytrLogOb.high} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VnytrLogOb/high" /></td>
                    <td><input value={VnytrLogOb.middle} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VnytrLogOb/middle"/></td>
                    <td><input value={VnytrLogOb.low} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VnytrLogOb/low"/></td>
                    <td><input value={VnytrLogOb.count} id="first_name" type="text" class="validate" /></td>
                </tr>
                <tr>
                    <td>Внешн. интерф.</td>
                    <td><input value={VneshInterface.high} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshInterface/high"/></td>
                    <td><input value={VneshInterface.middle} onChange={inputSizeValueHandler}  id="first_name" type="number" class="validate" name="VneshInterface/middle"/></td>
                    <td><input value={VneshInterface.low} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshInterface/low"/></td>
                    <td><input value={VneshInterface.count} id="first_name" type="text" class="validate" /></td>
                </tr>
                <tr>
                    <td>Внешний ввод</td>
                    <td><input value={VneshVvod.high} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshVvod/high"/></td>
                    <td><input value={VneshVvod.middle} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshVvod/middle"/></td>
                    <td><input value={VneshVvod.low} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshVvod/low"/></td>
                    <td><input value={VneshVvod.count} id="first_name" type="text" class="validate" /></td>
                </tr>
                <tr>
                    <td>Внешний вывод</td>
                    <td><input value={VneshVuvod.high} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshVuvod/high"/></td>
                    <td><input value={VneshVuvod.middle} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshVuvod/middle"/></td>
                    <td><input value={VneshVuvod.low} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshVuvod/low"/></td>
                    <td><input value={VneshVuvod.count} id="first_name" type="text" class="validate" /></td>
                </tr>
                <tr>
                    <td>Внешний запрос</td>
                    <td><input value={VneshZapros.high} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshZapros/high"/></td>
                    <td><input value={VneshZapros.middle} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshZapros/middle"/></td>
                    <td><input value={VneshZapros.low} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshZapros/low"/></td>
                    <td><input value={VneshZapros.count} id="first_name" type="text" class="validate" /></td>
                </tr>
            </tbody>
        </Table>
    );
};