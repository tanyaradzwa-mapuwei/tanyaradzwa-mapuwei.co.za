const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
const setHeaderShadow = () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 8);
};
setHeaderShadow();
window.addEventListener('scroll', setHeaderShadow, { passive: true });

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

const blogGrid = document.querySelector('#blogGrid');
const blogSearch = document.querySelector('#blogSearch');
const blogCategory = document.querySelector('#blogCategory');
const blogSort = document.querySelector('#blogSort');
const blogEmpty = document.querySelector('#blogEmpty');

function updateBlogCards() {
  if (!blogGrid) return;
  const cards = Array.from(blogGrid.querySelectorAll('.blog-card'));
  const query = (blogSearch?.value || '').trim().toLowerCase();
  const category = blogCategory?.value || 'all';
  const sort = blogSort?.value || 'newest';

  cards.sort((a, b) => {
    const ad = new Date(a.dataset.date || 0).getTime();
    const bd = new Date(b.dataset.date || 0).getTime();
    return sort === 'oldest' ? ad - bd : bd - ad;
  }).forEach(card => blogGrid.appendChild(card));

  let visibleCount = 0;
  cards.forEach(card => {
    const haystack = `${card.dataset.title || ''} ${card.dataset.category || ''} ${card.dataset.description || ''}`.toLowerCase();
    const matchesQuery = !query || haystack.includes(query);
    const matchesCategory = category === 'all' || card.dataset.category === category;
    const visible = matchesQuery && matchesCategory;
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  if (blogEmpty) blogEmpty.hidden = visibleCount !== 0;
}

[blogSearch, blogCategory, blogSort].forEach(control => {
  if (control) control.addEventListener('input', updateBlogCards);
});
updateBlogCards();
