"use strict";

const notes = require('./notes');

exports.assignRoutes = function (app) {
    app.post('/notes', notes.createNote);
    app.get('/notes/:id', notes.fetchNote);
    app.delete('/notes/:id', notes.deleteNote);
}