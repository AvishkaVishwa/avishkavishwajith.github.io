---
title: Blog
permalink: /blog/
---

<div class="grid">
{% for post in site.posts %}
  <a class="card" href="{{ post.url }}">
    <h3>{{ post.title }}</h3>
    <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
  </a>
{% endfor %}
</div>
