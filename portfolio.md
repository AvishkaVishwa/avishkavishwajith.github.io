---
title: Portfolio
---

## Portfolio

<div class="grid">
{% for pr in site.projects %}
  <a class="card" href="{{ pr.url }}">
    <h3>{{ pr.title }}</h3>
    <p>{{ pr.summary }}</p>
  </a>
{% endfor %}
</div>
