! function (e) {
  "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) {
    for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;) ++n;
    return Boolean(o[n])
  }), "function" != typeof e.closest && (e.closest = function (e) {
    for (var t = this; t && 1 === t.nodeType;) {
      if (t.matches(e)) return t;
      t = t.parentNode
    }
    return null
  })
}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function () {
  let modalButton = document.querySelector('.js-open-modal'),
    overlay = document.querySelector('#overlay-modal'),
    closeButton = document.querySelector('.js-modal-close'),
    body = document.body;

  modalButton.addEventListener('click', function (event) {
    event.preventDefault();

    let modalId = this.getAttribute('data-modal'),
      modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

    modalElem.classList.add('active');
    overlay.classList.add('active');
    body.classList.add('scroll-hidden');
  });

  closeButton.addEventListener('click', function (e) {
    let parentModal = this.closest('.modal');
    body.classList.remove('scroll-hidden');
    parentModal.classList.remove('active');
    overlay.classList.remove('active');
  });

  $(document).on('click', function(e) {
    if(e.target.id == 'overlay-modal') {
      $('.modal').removeClass('active');
      body.classList.remove('scroll-hidden');
      overlay.classList.remove('active');
    }
  });
});
