import React, { useState } from "react";
import "./News.scss";

function News() {

  const [selectedNews, setSelectedNews] = useState(null);

  const news = [
    {
      id: 1,
      title: "🔥 Новая партия деталей БПАН",
      text: "Рычаги, пружины, станс-комплекты — всё свежее, блестящее и готово к установке!",
      fullText:
        "Сегодня на склад завезли кучу ништяков: заниженные стойки, регулируемые рычаги, а также эксклюзивные тюнинг-комплекты от ведущих поставщиков БПАН. Кто первый — тот с кайфом!",
      date: "07.12.2025",
      img: "https://i.imgur.com/xT8q9Te.jpeg"
    },
    {
      id: 2,
      title: "⚡ -30% на подвеску и тюнинг",
      text: "Пока зима — тюнинг стоит дешевле! Самое время занижать таз.",
      fullText:
        "Скидки действуют только до конца месяца! В продаже: пневма, койловеры, пружины — всё что нужно чтобы валить низко.",
      date: "06.12.2025",
      img: "https://i.imgur.com/QASj8GX.jpeg"
    },
    {
      id: 3,
      title: "💣 Как отличить оригинал от подделки",
      text: "3 признака для проверки качества деталей.",
      fullText:
        "1️⃣ Проверяй маркировку.\n2️⃣ Качество металла и покраски.\n3️⃣ Смотри отзывы о продавце.\nВсегда бери качественные детали — дешевка дороже выйдет!",
      date: "05.12.2025",
      img: "https://i.imgur.com/PkYt4Uj.jpeg"
    }
  ];

  return (
    <div className="news-page">
      <h1 className="title">Новости мира БПАН</h1>

      <div className="news-list">
        {news.map(item => (
          <div
            className="card"
            key={item.id}
            onClick={() => setSelectedNews(item)}
          >
            <img src={item.img} alt={item.title} />
            <div className="info">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* --- МОДАЛКА --- */}
      {selectedNews && (
        <div className="modal-backdrop" onClick={() => setSelectedNews(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedNews.img} alt={selectedNews.title} />
            <h2>{selectedNews.title}</h2>
            <p>{selectedNews.fullText}</p>
            <span>{selectedNews.date}</span>

            <button
              className="close-btn"
              onClick={() => setSelectedNews(null)}
            >
              Закрыть ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default News;
