let html = require('choo/html');

module.exports = (state, emit) => {
  return html`
          <div class="homepage">
            <div class="header">
              <h1 class="title">${state.header.bandName}</h1>
              <h2 class="tag">${state.header.tagLine}</h2>
            </div> 
            <div class="nav">
              <ul>
                <li class="much-nav-item"><a href="/">Home</a></li>
                <li class="much-nav-item"><a href="/cats">Cats</a></li>
              </ul>
            </div>  
          </div>  
        `    
}