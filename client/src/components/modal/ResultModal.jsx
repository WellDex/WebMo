import React from 'react';

export const ResultModal = (props) => {
    const {
        Size,
        Tn,
        Dn,
        Cn,
        saveResult,
        changeShowModal,
    } = props;

    return (
        <div className='shadow'>
            <div className='show-modal'>
                <table>
                    <thead>
                        <tr>
                            <th>Результаты:</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Размер</td>
                            <td id="resSize">{Size}</td>
                        </tr>
                        <tr>
                            <td>Трудоемкость</td>
                            <td id="resTn">{Tn}</td>
                        </tr>
                        <tr>
                            <td>Длительность</td>
                            <td id="resDn">{Dn}</td>
                        </tr>
                        <tr>
                            <td>Стоимость</td>
                            <td id="resCn">{Cn}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='txt-al-center mg-top'>
                    <a className="waves-effect waves-light btn-small mg-right" onClick={saveResult}>Сохранить</a>
                    <a className="waves-effect waves-light btn-small" onClick={changeShowModal}>Закрыть</a>
                </div>
            </div>
        </div>
    );
};