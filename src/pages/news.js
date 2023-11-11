// pages/news.js
import React from 'react';
import Layout from '../components/Layout';
import NewsArticle from '../components/News/NewsArticle';
import NewsHeader from '../components/News/NewsHeader';
import PaginationControl from '../components/News/PaginationControl';

export default function News() {
  return (
    <Layout>
      <NewsHeader />
      {/* Пример: Повторение NewsArticle для каждой новости */}
      <NewsArticle title="Заголовок новости 1" date="Дата" summary="Краткое описание новости 1..." />
      <NewsArticle title="Заголовок новости 2" date="Дата" summary="Краткое описание новости 2..." />
      {/* ...другие новости */}
      <PaginationControl />
    </Layout>
  );
}
