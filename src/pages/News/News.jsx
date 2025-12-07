import React from 'react'
import './News.scss'

function News() {

  const news = [
    {
      id: 1,
      title: "Свежие запчасти для БПАН уже в наличии",
      text: "На склад завезли новые стойки, пружины и тюнинг-пакеты. Количество ограничено.",
      date: "07.12.2025"
    },
    {
      id: 2,
      title: "Скидки до -30% на популярные детали",
      text: "Пока зима — лучшая возможность затюнинговать тазик по бюджету!",
      date: "06.12.2025"
    },
    {
      id: 3,
      title: "Как выбрать качественные запчасти",
      text: "Разбор основных ошибок при покупке запчастей и советы для новичков.",
      date: "05.12.2025"
    },
  ]

  return (
    <div className="news">
      <h1 className="news-title">Новости БПАН</h1>

      {news.map(item => (
        <div className="news-item" key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <span>{item.date}</span>
        </div>
      ))}
    </div>
  )
}

export default News
