"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  publishedAt: string;
  source: string;
  url: string;
  content: string;
  image: string;
}

const NewsDetails = ({ id }: { id: string }) => {
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNewsData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/news.json");
      const data: NewsItem[] = await response.json();
      const foundNews = data.find((item) => item.id === parseInt(id));
      if (foundNews) {
        setNewsItem(foundNews);
      } else {
        setError("News article not found");
      }
    } catch (error) {
      setError("Failed to load news article");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">Loading...</div>
    );
  }

  if (error || !newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-lg">{error}</div>
    );
  }

  return (
    <div className=" text-white">
      <section className="w-full h-[60vh] relative overflow-hidden">
        <Image
          src= "/images/tramp.png"
          alt={newsItem.title}
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute bottom-0 left-0 p-4 lg:p-12 max-w-4xl">
          <h1 className="text-white text-3xl sm:text-5xl font-bold leading-snug drop-shadow-lg">
            {newsItem.title}
          </h1>
          <p className="mt-4 text-gray-200 text-sm sm:text-base">
            Published on {new Date(newsItem.publishedAt).toLocaleDateString()} • {newsItem.source}
          </p>
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-4 py-12">
        <div className="text-lg text-white leading-relaxed space-y-6">
          <p className="text-xl font-medium text-white">{newsItem.summary}</p>
          <p>{newsItem.content}</p>
        </div>

        <div className="mt-10 border-t pt-6 text-sm text-white flex flex-col sm:flex-row justify-between">
          <span>Source: {newsItem.source}</span>
          <a
            href={newsItem.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00e889] hover:underline mt-2 sm:mt-0"
          >
            Read full article →
          </a>
        </div>
      </section>
    </div>
  );
};

export default NewsDetails;
