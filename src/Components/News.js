import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = ({ setProgress, country, category, pageSize }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fetchNews = useCallback(async () => {
    setProgress(10);
    setLoading(true);
    setError(null);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=7887530db41542788269b4cadb0688a7&page=${page}&pageSize=${pageSize}`;
    try {
      const response = await fetch(url);
      setProgress(30);
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

      const data = await response.json();
      setProgress(70);
      if (data.status !== "ok") throw new Error(data.message);
      console.log(data);
      setArticles(data.articles);
      setTotalResults(data.totalResults);
    } catch (error) {
      console.error("Error fetching news:", error);
      setError(error.message);
    } finally {
      setLoading(false);
      setProgress(100);
    }
  }, [country, category, page, pageSize, setProgress]);

  useEffect(() => {
    fetchNews();
    document.title = `${capitalizeFirstLetter(category)} - NewsApp`;
  }, [fetchNews,category]);

  const handlePageChange = (direction) => {
    setPage((prevPage) => prevPage + direction);
  };

  return (
    <div className="container my-3">
      <h1 className="text-center">Top {capitalizeFirstLetter(category)} Headlines</h1>
      {loading && <Spinner />}
      {error && <p className="text-danger text-center">{error}</p>}
      <div className="row">
        {!loading &&
          !error &&
          articles.map((article,index) => (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={article.title || "No Title Available"}
                description={article.description || "No Description Available"}
                imageUrl={article.urlToImage || "https://via.placeholder.com/150"}
                newsUrl={article.url}
                author={article.author}
                date={article.publishedAt}
                source={article.source.name}
              />
            </div>
          ))}
      </div>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-dark"
          disabled={page <= 1}
          onClick={() => handlePageChange(-1)}
        >
          &larr; Prev
        </button>
        <button
          className="btn btn-dark"
          disabled={page >= Math.ceil(totalResults / pageSize)}
          onClick={() => handlePageChange(1)}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 12,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
