const newsToggle = document.querySelector("[data-news-toggle]");
const hiddenNews = [...document.querySelectorAll(".news-hidden")];
const publicationFilters = [...document.querySelectorAll("[data-filter]")];
const publications = [...document.querySelectorAll(".publication-item")];

newsToggle?.addEventListener("click", () => {
  const expanded = newsToggle.getAttribute("aria-expanded") === "true";

  hiddenNews.forEach((item) => {
    item.hidden = expanded;
  });

  newsToggle.setAttribute("aria-expanded", String(!expanded));
  newsToggle.textContent = expanded ? "[Show more]" : "[Show less]";
});

publicationFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const type = filter.dataset.filter;

    publicationFilters.forEach((button) => {
      button.classList.toggle("active", button === filter);
    });

    publications.forEach((publication) => {
      const visible = type === "all" || publication.dataset.type === type;
      publication.classList.toggle("is-hidden", !visible);
    });
  });
});
