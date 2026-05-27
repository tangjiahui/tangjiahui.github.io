---
layout: page
title: More about me
subtitle: A few extras beyond the writing.
permalink: /more/
---

## What I'm listening to

A rolling playlist — the songs in heavy rotation right now.

<div class="spotify-embed">
  <iframe
    src="https://open.spotify.com/embed/playlist/2xCNeagr6IfsSvLjMoXNFb?utm_source=generator&theme=0"
    width="100%"
    height="480"
    frameborder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    title="On Repeat playlist on Spotify"></iframe>
</div>

[Open in Spotify ↗](https://open.spotify.com/playlist/2xCNeagr6IfsSvLjMoXNFb)

## What I'm reading

<ul class="reading-list">
{% for book in site.data.reading %}
  <li class="book">
    <a class="book-link" href="{{ book.link }}" target="_blank" rel="noopener">
      <img src="https://covers.openlibrary.org/b/isbn/{{ book.isbn }}-L.jpg"
           alt="{{ book.title }} cover"
           loading="lazy">
    </a>
    <div class="book-meta">
      <p class="book-title">{{ book.title }}</p>
      <p class="book-author">{{ book.author }}</p>
    </div>
  </li>
{% endfor %}
</ul>

## What I recently finished

<ul class="reading-list">
{% for book in site.data.finished %}
  <li class="book">
    <a class="book-link" href="{{ book.link }}" target="_blank" rel="noopener">
      <img src="{% if book.cover %}{{ book.cover }}{% else %}https://covers.openlibrary.org/b/isbn/{{ book.isbn }}-L.jpg{% endif %}"
           alt="{{ book.title }} cover"
           loading="lazy">
    </a>
    <div class="book-meta">
      <p class="book-title">{{ book.title }}</p>
      <p class="book-author">{{ book.author }}</p>
    </div>
  </li>
{% endfor %}
</ul>
