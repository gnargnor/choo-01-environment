let html = require('choo/html');

let header = require('./header');
let cats = require('./cats');

module.exports = (view, state, emit) => {
  return html`
    <div class="main">
      ${header(state, emit)}
      ${view(state, emit)}
    </div>
  `
  
}