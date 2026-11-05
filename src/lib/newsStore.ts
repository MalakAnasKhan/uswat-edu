'use client';

import { useState, useEffect, useCallback } from 'react';
import { NewsArticle, INITIAL_NEWS } from '@/data/news';

const STORAGE_KEY = 'uswat_news_articles_v1';
const UPDATE_EVENT = 'uswat-news-storage-update';

export function getStoredNews(): NewsArticle[] {
  if (typeof window === 'undefined') {
    return INITIAL_NEWS;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_NEWS));
      return INITIAL_NEWS;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch (err) {
    console.warn('Failed to parse news from localStorage, using initial dataset:', err);
  }
  return INITIAL_NEWS;
}

export function saveNewsArticle(article: Partial<NewsArticle> & { title: string; summary: string; content: string }): NewsArticle {
  const existing = getStoredNews();
  const slug =
    article.slug ||
    article.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

  let updatedList: NewsArticle[];
  let savedItem: NewsArticle;

  if (article.id) {
    // Update existing
    savedItem = {
      ...article,
      id: article.id,
      slug: article.slug || slug,
      category: article.category || 'Academics',
      publishedAt: article.publishedAt || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      author: article.author || 'Public Relations Office',
      imageUrl: article.imageUrl || '/images/Meeting 2.jpg',
    } as NewsArticle;

    updatedList = existing.map((item) => (item.id === article.id ? savedItem : item));
  } else {
    // Create new
    savedItem = {
      id: `news-${Date.now()}`,
      slug: slug || `update-${Date.now()}`,
      title: article.title,
      summary: article.summary,
      content: article.content,
      imageUrl: article.imageUrl || '/images/Meeting 2.jpg',
      imageCaption: article.imageCaption || '',
      category: article.category || 'Academics',
      publishedAt: article.publishedAt || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      author: article.author || 'Directorate of Media',
      isFeatured: !!article.isFeatured,
      tags: article.tags || ['Campus Update'],
    };

    updatedList = [savedItem, ...existing];
  }

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
      window.dispatchEvent(new Event(UPDATE_EVENT));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  }

  return savedItem;
}

export function deleteNewsArticle(id: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const existing = getStoredNews();
    const updated = existing.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event(UPDATE_EVENT));
    return true;
  } catch (err) {
    console.error('Failed to delete news article:', err);
    return false;
  }
}

export function resetNewsToDefault(): NewsArticle[] {
  if (typeof window === 'undefined') return INITIAL_NEWS;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_NEWS));
    window.dispatchEvent(new Event(UPDATE_EVENT));
    return INITIAL_NEWS;
  } catch (err) {
    console.error('Failed to reset news:', err);
    return INITIAL_NEWS;
  }
}

/**
 * Custom reactive React hook for consuming and auto-updating news articles
 */
export function useNewsArticles() {
  const [articles, setArticles] = useState<NewsArticle[]>(INITIAL_NEWS);
  const [isLoaded, setIsLoaded] = useState(false);

  const refresh = useCallback(() => {
    const data = getStoredNews();
    setArticles(data);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    refresh();

    const handleUpdate = () => {
      refresh();
    };

    window.addEventListener(UPDATE_EVENT, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(UPDATE_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, [refresh]);

  return {
    articles,
    isLoaded,
    refresh,
    saveArticle: saveNewsArticle,
    deleteArticle: deleteNewsArticle,
    resetToDefault: resetNewsToDefault,
  };
}

