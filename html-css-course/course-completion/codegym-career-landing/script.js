(function () {
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  var nav = document.getElementById('mainNav');
  if (!nav) return;
  nav.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav.classList.contains('show') && window.jQuery) {
        window.jQuery(nav).collapse('hide');
      }
    });
  });
})();
