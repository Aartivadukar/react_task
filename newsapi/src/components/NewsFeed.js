// src/components/NewsFeed.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsFeed.css'; // Optional: For component-specific styling

const NewsFeed = () => {
  const [articles, setArticles] = useState([]); // Holds the list of articles
  const [loading, setLoading] = useState(true); // Indicates if data is being fetched
  const [error, setError] = useState(null);     // Holds error messages, if any

  const apiKey = process.env.REACT_APP_NEWS_API_KEY; // Accessing API key from environment variables

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Fetch top headlines from the US
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );
        setArticles(response.data.articles); // Update articles state
        setLoading(false);                   // Update loading state
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Error fetching news data'); // Update error state
        setLoading(false);                     // Update loading state
      }
    };

    fetchNews(); // Invoke the fetch function
  }, [apiKey]); // Dependency array ensures useEffect runs when apiKey changes

  if (loading) return <div className="loading">Loading...</div>; // Display while loading
  if (error) return <div className="error">{error}</div>;        // Display if there's an error

  return (
    <div className="news-feed">
      <h1>Top Headlines</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index} className="news-item">
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-title">
              {article.title}
            </a>
            {article.description && <p className="news-description">{article.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
