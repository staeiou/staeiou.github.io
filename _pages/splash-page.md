---
title: "Splash Page"
layout: splash
permalink: /splash-page/
date: 2016-03-23T11:48:41-04:00
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: unsplash-image-1.jpg
  cta_label: "Download"
  cta_url: "https://github.com/mmistakes/minimal-mistakes/"
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
intro: 
feature_row:
  - image_path: unsplash-gallery-image-1-th.jpg
    alt: "placeholder image 1"
    title: "Placeholder 1"
  - image_path: unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder 2"
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--inverse"
  - image_path: unsplash-gallery-image-3-th.jpg
    title: "Placeholder 3"
feature_row2:
  - image_path: unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Left Aligned"
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--inverse"
feature_row3:
  - image_path: unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Right Aligned"
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--inverse"
feature_row4:
  - image_path: unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Center Aligned"
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--inverse"
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

{% include feature_row id="feature_row2" type="left" %}

{% include feature_row id="feature_row3" type="right" %}

{% include feature_row id="feature_row4" type="center" %}
