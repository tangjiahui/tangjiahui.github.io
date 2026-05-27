# tangjiahui.github.io

Personal blog. Built with Jekyll, hosted on GitHub Pages.

## Local development

Requires Ruby 3.x and Bundler.

```bash
bundle install
bundle exec jekyll serve
# open http://127.0.0.1:4000
```

## Writing a new post

Create a file in `_posts/` named `YYYY-MM-DD-title.md`:

```yaml
---
title: My Post Title
subtitle: Optional subtitle.
date: 2026-06-01 09:00:00 -0700
tags: [tag1, tag2]
---

Post content here in Markdown.
```

## Structure

```
_config.yml         site config
_layouts/           page/post templates
_includes/          header, footer
_posts/             blog posts
assets/css/main.css all styles
index.html          home (post list)
about.md            about page
```

## Deploy

Push to the `main` branch of `tangjiahui/tangjiahui.github.io`.
GitHub Pages builds and serves automatically at https://tangjiahui.github.io.
