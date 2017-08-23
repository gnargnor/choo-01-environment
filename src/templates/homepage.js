let html = require('choo/html');

module.exports = (state, emit) => {
  return html`
    <div class="homepage">
      <p>You only need to know about the cats.</p>
    </div>
  `
}