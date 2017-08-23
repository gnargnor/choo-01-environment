let choo = require('choo');
let html = require('choo/html');

let store = require('./store/mainStore');

let layout = require('./templates/_layout');
let homepage = require('./templates/homepage');
let cats = require('./templates/cats');

let app = choo()

app.use((state, emitter) => store(state, emitter));


app.route('/', (state, emit) => layout(homepage, state, emit));
app.route('/cats', (state, emit) => layout(cats, state, emit));

app.mount('div');
