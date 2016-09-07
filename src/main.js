const tracks = require('./tracks.js');
const layout = require('./layout.js');
const render = require('./render.js');

class Circos {
  constructor(configuration) {
    this.configuration = configuration;
    this.heatmaps = {};
  }
  layout(configuration, data) {
    this.layout = layout(configuration, data);
    return this;
  }
  heatmap(id, configuration, data) {
    this.heatmaps[id] = tracks.heatmap(configuration, data);
    return this;
  }
  render() {
    render(this);
    return this;
  }
}

module.exports = Circos;
