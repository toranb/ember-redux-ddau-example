import redux from 'npm:redux';

var devtools = window.devToolsExtension ? window.devToolsExtension() : f => f;

export default redux.compose(devtools);
