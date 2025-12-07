import React, { useState } from "react";
import "./News.scss";

function News() {

  const news = [
    {
      id: 1,
      title: "🔥 Новая партия деталей БПАН",
      text: "Рычаги, пружины, станс-комплекты — всё свежее и блестящее!",
      fullText: "Поступление: койловеры, полиуретан, пружины, сцепления, арм. шланги, пневма. Всё оригинал, гарантия.",
      date: "07.12.2025",
      img: "https://i.imgur.com/xT8q9Te.jpeg"
    },
    {
      id: 2,
      title: "⚡ Скидки до -30% на подвеску",
      text: "Пока зима — тюнинг стоит дешевле!",
      fullText: "Скидки распространяются на койловеры, стингер-пружины, рулевые наконечники и многорычажку.",
      date: "06.12.2025",
      img: "https://i.imgur.com/QASj8GX.jpeg"
    },
    {
      id: 3,
      title: "💣 Как отличить оригинал от подделки",
      text: "3 признака, по которым сразу видно фейк.",
      fullText: "Оригинал — ровные литые швы, маркировка, нет запаха дешёвой резины.",
      date: "05.12.2025",
      img: "https://i.imgur.com/PkYt4Uj.jpeg"
    },
    {
      id: 4,
      title: "🛠 ТОП запчастей для БПАН-тюнинга",
      text: "Составили список деталей, которые берут чаще всего.",
      fullText: "Список: койловеры J-Ride, сцепа Stage 2, арм. магистрали тормозов, распорки, пневма AirFlex.",
      date: "03.12.2025",
      img: "https://i.imgur.com/ArdtMsh.jpeg"
    },
    {
      id: 5,
      title: "🚗 Новые диски и резина",
      text: "R15, R16, R17 — широкий стэнс под таз",
      fullText: "Ширина 8–9J, низкий профиль, доступные расцветки: полированный металл, чёрный мат, хром-неон.",
      date: "02.12.2025",
      img: "https://i.imgur.com/l9Ys1yE.jpeg"
    },
    {
      id: 6,
      title: "🔧 Обновление каталога BпанParts",
      text: "Добавлены новые категории — теперь искать проще!",
      fullText: "Категории: пневма, тормоза, подвеска, салон, экстерьер, электроника. Сделали фильтры.",
      date: "29.11.2025",
      img: "https://i.imgur.com/OFuJdTc.jpeg"
    },
    {
      id: 7,
      title: "🏎 Лучшие конфиги 2025",
      text: "Подборка самых стильных тазов России",
      fullText: "31 проект участников — с пневмой, camber-fitment, полным тюнингом салона.",
      date: "26.11.2025",
      img: "https://i.imgur.com/pAxsM4Y.jpeg"
    },
    {
      id: 8,
      title: "📦 Б/У детали — выгодные предложения",
      text: "Новые объявления каждый день!",
      fullText: "Фары, капоты, салон, подвеска — проверенное Б/У с гарантией продавца.",
      date: "21.11.2025",
      img: "https://i.imgur.com/zq3P55o.jpeg"
    }
  ];

  // === ПАГИНАЦИЯ ===
  const itemsPerPage = 3;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(news.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const currentNews = news.slice(start, start + itemsPerPage);

  // Модальное окно
  const [activeNews, setActiveNews] = useState(null);

  return (
    <div className="news-page">
      <h1 className="title">Новости мира БПАН</h1>

      <div className="news-list">
        {currentNews.map(item => (
          <div className="card" key={item.id} onClick={() => setActiveNews(item)}>
            <img src={item.img} alt={item.title} />
            <div className="info">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 🔘 ПАГИНАЦИЯ */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button 
            key={i} 
            className={page === i+1 ? "active" : ""} 
            onClick={() => setPage(i+1)}>
            {i+1}
          </button>
        ))}
      </div>


      {/* МОДАЛЬНОЕ ОКНО */}
      {activeNews && (
        <div className="modal-bg" onClick={() => setActiveNews(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="close" onClick={() => setActiveNews(null)}>✖</button>

            <img src={activeNews.img} alt="" />
            <h2>{activeNews.title}</h2>
            <p>{activeNews.fullText}</p>
            <span>{activeNews.date}</span>
          </div>
        </div>
      )}

    </div>
  );
}

export default News;
