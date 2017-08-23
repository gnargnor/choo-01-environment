const choo = require('choo');
const html = require('choo/html');

const cats = require('./templates/cats');
const merch = require('./templates/merch');
const music = require('./templates/music');
const shows = require('./templates/shows');
const videos = require('./templates/videos');

const app = choo();

let main = () => {
  return html`
    <div class="container">
      <div class="heaader">
        <h1>MUCH WORSE</h1>
        <h2>Minneapolis Hardcore</h2>
      </div>
      <ul class="much-nav">
        <li class="much-nav-item"><a href="/cats">Cats</a></li>
        <li class="much-nav-item">Music</li>
        <li class="much-nav-item">Videos</li>
        <li class="much-nav-item">Shows</li>
        <li class="much-nav-item">Merch</li>
      </ul>
    </div>
  `
};

app.route('/', main);
app.route('/cats', cats);
app.route('/music', music);
app.route('/videos', videos);
app.route('/shows', shows);
app.route('/merch', merch);

app.mount('div');
