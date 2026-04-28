(function () {
  var tocEl = document.querySelector('.irg-toc-inner');
  if (!tocEl) return;

  var headings = document.querySelectorAll('.irg-article h2, .irg-article h3');
  if (headings.length === 0) {
    document.querySelector('.irg-toc') && (document.querySelector('.irg-toc').style.display = 'none');
    return;
  }

  var ul = document.createElement('ul');

  headings.forEach(function (h) {
    if (!h.id) {
      h.id = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }
    var li = document.createElement('li');
    li.className = h.tagName === 'H3' ? 'irg-toc-sub' : '';
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent.replace(/¶$/, '').trim();
    li.appendChild(a);
    ul.appendChild(li);
  });

  tocEl.appendChild(ul);

  // Highlight active heading on scroll
  var links = ul.querySelectorAll('a');
  window.addEventListener('scroll', function () {
    var fromTop = window.scrollY + 80;
    headings.forEach(function (h, i) {
      if (h.offsetTop <= fromTop) {
        links.forEach(function (l) { l.classList.remove('irg-toc-active'); });
        if (links[i]) links[i].classList.add('irg-toc-active');
      }
    });
  });
})();
