# Zhenchuan Yang - Academic Homepage

A dependency-free static academic homepage for Zhenchuan Yang. The layout
closely follows the compact academic-page structure of
[justimyhxu.github.io](https://justimyhxu.github.io/), while all biography,
research, education, publication, activity, contact, and profile content is
adapted from [zhenchuanyang.github.io](https://zhenchuanyang.github.io/).

## Files

- `index.html` — page content and semantic structure
- `styles.css` — responsive visual design
- `script.js` — news expansion and publication filters
- `public/profile.jpg` — locally hosted profile image
- `.nojekyll` — keeps GitHub Pages from applying Jekyll processing

## Preview locally

Open `index.html` directly in a browser, or run any static file server from this
folder. No install or build step is required.

## Publish with GitHub Pages

1. Create a GitHub repository and upload the files in this folder.
2. Open **Settings → Pages** in the repository.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the publishing branch (normally `main`) and the `/ (root)` folder.
5. Save. GitHub will publish the site after the deployment completes.

For a personal address such as `https://username.github.io/`, name the
repository `username.github.io`.

## Updating content

- Edit news items in the `#news` section of `index.html`.
- Edit research interests in the `#topics` section.
- Add publications as new `.publication` articles. Set `data-type` to
  `article` or `presentation` so the filters continue to work.
- Replace `public/profile.jpg` while keeping the same filename to update the
  main image without changing the markup.
