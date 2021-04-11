import React from 'react';
import { Table } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

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
                    <td><input value={VnytrLogOb.low >= 3 ? VnytrLogOb.low / 3 : VnytrLogOb.low} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VnytrLogOb/low" /></td>
                    <td><input value={VnytrLogOb.middle >= 2 ? VnytrLogOb.middle / 2 : VnytrLogOb.middle} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VnytrLogOb/middle"/></td>
                    <td><input value={VnytrLogOb.high} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VnytrLogOb/high"/></td>
                    <td><input value={VnytrLogOb.low + VnytrLogOb.middle + VnytrLogOb.high} id="first_name" type="text" class="validate" /></td>
                </tr>
                <tr>
                    <td>Внешн. интерф.</td>
                    <td><input value={VneshInterface.low >= 3 ? VneshInterface.low / 3 : VneshInterface.low} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshInterface/low"/></td>
                    <td><input value={VneshInterface.middle >= 2 ? VneshInterface.middle / 2 : VneshInterface.middle} onChange={inputSizeValueHandler}  id="first_name" type="number" class="validate" name="VneshInterface/middle"/></td>
                    <td><input value={VneshInterface.high} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshInterface/high"/></td>
                    <td><input value={VneshInterface.low + VneshInterface.middle + VneshInterface.high} id="first_name" type="text" class="validate" /></td>
                </tr>
                <tr>
                    <td>Внешний ввод</td>
                    <td><input value={VneshVvod.low >= 3 ? VneshVvod.low / 3 : VneshVvod.low} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshVvod/low"/></td>
                    <td><input value={VneshVvod.middle >= 2 ? VneshVvod.middle / 2 : VneshVvod.middle} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshVvod/middle"/></td>
                    <td><input value={VneshVvod.high} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshVvod/high"/></td>
                    <td><input value={VneshVvod.low + VneshVvod.middle + VneshVvod.high} id="first_name" type="text" class="validate" /></td>
                </tr>
                <tr>
                    <td>Внешний вывод</td>
                    <td><input value={VneshVuvod.low >= 3 ? VneshVuvod.low / 3 : VneshVuvod.low} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshVuvod/low"/></td>
                    <td><input value={VneshVuvod.middle >= 2 ? VneshVuvod.middle / 2 : VneshVuvod.middle} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshVuvod/middle"/></td>
                    <td><input value={VneshVuvod.high} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshVuvod/high"/></td>
                    <td><input value={VneshVuvod.low + VneshVuvod.middle + VneshVuvod.high} id="first_name" type="text" class="validate" /></td>
                </tr>
                <tr>
                    <td>Внешний запрос</td>
                    <td><input value={VneshZapros.low >= 3 ? VneshZapros.low / 3 : VneshZapros.low} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshZapros/low"/></td>
                    <td><input value={VneshZapros.middle >= 2 ? VneshZapros.middle / 2 : VneshZapros.middle} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshZapros/middle"/></td>
                    <td><input value={VneshZapros.high} onChange={inputSizeValueHandler} id="first_name" type="number" class="validate" name="VneshZapros/high"/></td>
                    <td><input value={VneshZapros.low + VneshZapros.middle + VneshZapros.high} id="first_name" type="text" class="validate" /></td>
                </tr>
            </tbody>
        </Table>
    );
};

CountFunction.propTypes = {
    projectFormulaData: PropTypes.object,
    inputSizeValueHandler: PropTypes.func,
}