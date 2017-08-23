module.exports = (state, emitter) => {
  state.header = {
    bandName: 'MUCH WORSE',
    tagLine: 'Minneapolis Cats'
  }

  state.cats = [
    {name: "Moo", id: "moo"},
    {name: "Worm", id: "worm"},
    {name: "Party", id: "party"},
    {name: "Suki", id: "suki"},
    {name: "Ghost of Rufus", id: "rufus"},
    {name: "Sofia", id: "sofia"},
    {name: "Simon", id: "simon"},
  ]

  state.style = {
    layout: "padding: 20px 30px; background: lightblue; font-family: 'Helvetica', sans-serif;",
    homepage: "color: blue;",
    navBar: "margin: 0 auto; background: white;",
    navItem: "padding:5px 10px; display: inline-block; list-style: none;",
    header: "",
    headerH1: "font-size: 50px; margin: 0; padding-bottom: 0;",
    headerH2: "font-size: 30px; margin: 0; padding-left: 10px; padding-top: 5px;",
    catItem: "padding:5px 10px; display: inline-block; list-style: none; cursor: pointer;"
  }

  emitter.on('clickCats', () => {
    state.style.homepage = (state.style.homepage === "color: red;") ? "color: blue;" : "color: red;";
    emitter.emit('render');
  })

  emitter.on('clickOneCat', (catID) => {
    console.log(catID);

    emitter.emit('render');
  })
}