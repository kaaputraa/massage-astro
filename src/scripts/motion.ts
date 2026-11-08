const root = document.documentElement;
root.classList.add("ready");

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// 1. Grup yang muncul bertahap
document.querySelectorAll<HTMLElement>("main [data-stagger]").forEach((group) => {
  const step = Number(group.dataset.stagger) || 90;
  Array.from(group.children).forEach((child, i) => {
    child.classList.add("reveal");
    (child as HTMLElement).style.setProperty("--d", `${i * step}ms`);
  });
});

// 2. Judul tiap section dan elemen yang ditandai data-reveal
document
  .querySelectorAll<HTMLElement>("main section header, main [data-reveal]")
  .forEach((el) => el.classList.add("reveal"));

// 3. Munculkan saat masuk layar (sekali saja)
const targets = document.querySelectorAll<HTMLElement>(".reveal");
if (reduce || !("IntersectionObserver" in window)) {
  targets.forEach((el) => el.classList.add("is-in"));
} else {
  const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const el = e.target as HTMLElement;
        el.classList.add("is-in");
        io.unobserve(el);
      }
    });
  },
  {
    threshold: 0,
    rootMargin: "0px 0px 0px 0px",
  },
);

targets.forEach((el) => {
  io.observe(el);
});
  targets.forEach((el) => io.observe(el));
}

// 4. Bilah progres dan parallax
const bar = document.querySelector<HTMLElement>(".scroll-progress");
const scopes = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
let queued = false;

const update = () => {
  queued = false;
  const max = root.scrollHeight - window.innerHeight;
  if (bar) bar.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
  if (!reduce) {
    const y = Math.min(window.scrollY, window.innerHeight * 1.2);
    scopes.forEach((s) => s.style.setProperty("--py", `${y}px`));
  }
};

window.addEventListener(
  "scroll",
  () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  },
  { passive: true },
);
window.addEventListener("resize", update);
update();

export {};