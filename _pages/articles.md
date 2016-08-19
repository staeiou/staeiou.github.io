---
layout: archive
title: "Academic Articles"
permalink: /articles/
author_profile: true
---
You can also find my articles on [Google Scholar](http://scholar.google.com/citations?user=0AvWi3wAAAAJ&hl=en)

{% include base_path %}

{% for post in site.articles reversed %}
  {% include archive-single.html %}
{% endfor %}
