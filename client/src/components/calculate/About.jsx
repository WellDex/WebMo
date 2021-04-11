import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../index.css'

export const About = (props) => {
    
    return(
        <div className='container-about'>
            <p className="title">О нас</p>
            <p className="text">Данное веб-приложение создано для оценивания расходов с помощью модели <strong>WebMo</strong>.
            Приложения состоит из страниц <NavLink to="/calculator/params"><span className="about-links">Калькулятор</span></NavLink> и <NavLink to="/listProject"><span className="about-links">Список проектов</span></NavLink>.</p>
            <p className="text">Страница <strong>Калькулятор</strong> делится на две подстраницы Параметры модели и Размер. 
            На первой странице присутствует функционал по добавлению названия, описания проекта. Так же имеется доступ к изминению значений констант и атрибутов ценности.
            Вторая страница несет в себе функционал по расчету размера и сложности проекта с помощью модели <strong>WebObjects</strong>.</p>
            <p className="title">Формулы расчета</p>
            <p className="text">Изменяемые параметры(константы):</p>
            <p className="text-formula"><strong>A:</strong> 2.0</p>
            <p className="text-formula"><strong>B:</strong> 1.5</p>
            <p className="text-formula"><strong>P1:</strong> 1.00</p>
            <p className="text-formula"><strong>P2:</strong> 0.33</p>
            <p className="text">Атрибути стоимости: <strong>CPLX, PDIF, PERS, PREX, FCIL, SCED, RUSE, TEAM, PEFF.</strong>
            <br/> У каждого атрибута варьируется значение в зависимости от <strong>уровня оценки.</strong></p>
            <p className="text">Оценка сложности и размера проекта имеет параметры: <strong>WebObjects(</strong>внутриннии логические файлы, внешнии файлы, внешнии файлы ввода, внешнии файлы вывода, внешнии запросы<strong>)</strong>,
            <strong> Количество</strong>,
            <strong> Сложность(</strong>Низкая = 3, Средняя = 2, Высокая = 1<strong>)</strong>.</p>
            <p className="text">Формулы расчета количества объектов: <span className="formula"><strong>WebObject * Сложность = Количество</strong></span>. Далее они суммируются в один общий результат <strong>Размер</strong>.</p>
            <p className="text">Формула расчета CDI: <span className="formula"><strong>CPLX * PDIF * PERS * PREX * FCIL * SCED * RUSE * TEAM * PEFF = CDI</strong></span>.</p>
            <p className="text">Формула расчета усилий: <span className="formula"><strong>A * CDI * Размер * P1 = Усилия</strong></span>.</p>
            <p className="text">Формула расчета продолжительности: <span className="formula"><strong>B * Усилия * P2 = Продолжительность</strong></span>.</p>
            <p className="text">Формула расчета количества работников: <span className="formula"><strong>Усилия / Продолжительность = Работники</strong></span>.</p>
        </div>
    )
}