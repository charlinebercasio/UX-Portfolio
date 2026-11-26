// Scales embedded prototypes (and any other too-wide block) down to fit small screens.
(function () {
  var queued = false;
  function fit() {
    queued = false;
    var root = document.getElementById('dc-root');
    if (!root) return;
    var vw = document.documentElement.clientWidth;
    var hosts = root.querySelectorAll('.sc-host[data-dc-tpl]');
    for (var i = 0; i < hosts.length; i++) {
      var h = hosts[i];
      if (h.parentElement && h.parentElement.closest('.sc-host[data-dc-tpl]')) continue; // only outermost embeds
      h.style.zoom = '';
      var natural = h.scrollWidth;
      var avail = h.parentElement.clientWidth; // layout width, ignores CSS transforms
      if (natural > avail + 1 && avail > 0) h.style.zoom = (avail / natural).toFixed(4);
    }
    // anything else still wider than the screen (fixed-width page blocks)
    if (vw < 900) {
      var els = root.querySelectorAll('[style*="width:"]');
      for (var j = 0; j < els.length; j++) {
        var e = els[j];
        if (e.closest('.sc-host[data-dc-tpl]')) continue;
        e.style.zoom = '';
        var r = e.getBoundingClientRect();
        if (r.right > vw - 6 && /width:\s*\d{3,}px/.test(e.getAttribute('style') || '')) {
          var room = vw - Math.max(r.left, 8) - 12;
          if (room > 0 && room < r.width) e.style.zoom = (room / r.width).toFixed(4);
        }
      }
    }
  }
  function queue() { if (!queued) { queued = true; requestAnimationFrame(fit); } }
  window.addEventListener('resize', queue);
  window.addEventListener('load', queue);
  [300, 1000, 2500, 5000].forEach(function (t) { setTimeout(queue, t); });
  // embeds that mount later (e.g. the Autoplay / Interactive toggle)
  document.addEventListener('click', function () { setTimeout(queue, 120); setTimeout(queue, 900); }, true);
})();
