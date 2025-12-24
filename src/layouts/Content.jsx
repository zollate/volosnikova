import React from 'react';
import { Routes, Route } from 'react-router-dom';

function Content() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/about" element={<News />} />
        <Route path="/services" element={<Reviews />} />
      </Routes>
    </main>
  );
}

export default Content;
