import React from 'react';

export const ResultModal = (props) => {
    const {
        result,
        saveResult,
        changeShowModal,
    } = props;

    console.log(props)
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
                            <td id="resSize">{result.size.sizeWebObject.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Трудоемкость</td>
                            <td id="resTn">{result.other.Tn.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Длительность</td>
                            <td id="resDn">{result.other.Dn.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Стоимость</td>
                            <td id="resCn">{"Cn"}</td>
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