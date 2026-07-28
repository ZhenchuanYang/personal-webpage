const newsToggle = document.querySelector("[data-news-toggle]");
const hiddenNews = [...document.querySelectorAll(".news-hidden")];
const publicationFilters = [...document.querySelectorAll("[data-filter-group]")];
const publications = [...document.querySelectorAll(".publication-item")];
const publicationFilterState = {
  scope: "all",
  year: "all",
  topic: "all",
};

newsToggle?.addEventListener("click", () => {
  const expanded = newsToggle.getAttribute("aria-expanded") === "true";

  hiddenNews.forEach((item) => {
    item.hidden = expanded;
  });

  newsToggle.setAttribute("aria-expanded", String(!expanded));
  newsToggle.textContent = expanded ? "[Show more]" : "[Show less]";
});

function updatePublications() {
  publications.forEach((publication) => {
    const topics = (publication.dataset.topics || "").split(/\s+/).filter(Boolean);
    const matchesScope =
      publicationFilterState.scope === "all" ||
      publication.dataset.selected === "true";
    const matchesYear =
      publicationFilterState.year === "all" ||
      publication.dataset.year === publicationFilterState.year;
    const matchesTopic =
      publicationFilterState.topic === "all" ||
      topics.includes(publicationFilterState.topic);

    publication.classList.toggle(
      "is-hidden",
      !(matchesScope && matchesYear && matchesTopic),
    );
  });
}

publicationFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const group = filter.dataset.filterGroup;
    publicationFilterState[group] = filter.dataset.filter;

    publicationFilters
      .filter((button) => button.dataset.filterGroup === group)
      .forEach((button) => {
        button.classList.toggle("active", button === filter);
      });

    updatePublications();
  });
});
