import React from "react";
import "./News.scss";

function News() {

  const news = [
    {
      id: 1,
      title: "🔥 Новая партия деталей БПАН",
      text: "Рычаги, пружины, станс-комплекты — всё свежее, блестящее и готово к установке!",
      date: "07.12.2025",
      img: "https://i.imgur.com/xT8q9Te.jpeg"
    },
    {
      id: 2,
      title: "⚡ -30% на подвеску и тюнинг",
      text: "Пока зима — тюнинг стоит дешевле! Самое время занижать таз.",
      date: "06.12.2025",
      img: "https://i.imgur.com/QASj8GX.jpeg"
    },
    {
      id: 3,
      title: "💣 Как отличить оригинал от подделки",
      text: "3 признака, по которым ты сразу поймёшь: деталь — оригинал или шлак.",
      date: "05.12.2025",
      img: "https://i.imgur.com/PkYt4Uj.jpeg"
    }
  ];

  return (
    <div className="news-page">
      <h1 className="title">Новости мира БПАН</h1>

      <div className="news-list">
        {news.map(item => (
          <div className="card" key={item.id}>
            <img src={item.img} alt={item.title} />

            <div className="info">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
