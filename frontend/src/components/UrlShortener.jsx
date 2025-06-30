import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShortUrl('');
    setIsSubmitting(true);
    setIsCopied(false);

    try {
      const response = await axios.post('http://localhost:5000/api/shorten', { originalUrl });
      const newShortUrl = `http://localhost:5000/api/${response.data.shortUrl}`;
      setShortUrl(newShortUrl);
    } catch (err) {
      setError('Failed to shorten URL. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      setError('Failed to copy URL. Please try again.');
    }
  };

  return (
    <div className="app-container">
      <div className="logo">
        <span>Make Your Long Url Shorter</span>
      </div>
      <h2 className="header">URL Shortener — Free & Secure</h2>
      <p className="description">
        Shorten long URLs instantly with URL-Short — a modern Bitly alternative that’s fast, private, and 100% free. No signup needed.
      </p>
      <form onSubmit={handleSubmit} className="form-group">
        <div className="input-wrapper">
          <input
            type="url"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            placeholder="https://example.com"
            className="input"
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            className="button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Shortening...' : 'Shorten'}
          </button>
        </div>
      </form>
      {shortUrl && (
        <div className="result-box">
          <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="result-link">
            {shortUrl}
          </a>
          <button
            className="result-button copy-button"
            onClick={handleCopy}
            title="Copy to clipboard"
          >
            <img src="https://img.icons8.com/ios-filled/24/ffffff/copy.png" alt="Copy" />
          </button>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default UrlShortener;
