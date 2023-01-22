const express = require('express');
const router= express.Router();

const register = require('./register')
const login = require('./login')
const logout = require('./logout')
const isLogged = require('./isLogged');
const createNote = require('./createNote')
const updateNote = require('./updateNote')
const deleteNote = require('./deleteNote')
const getNotes = require('./getNotes')


router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/isLogged', isLogged)
router.post('/createNote', createNote);
router.post('/updateNote', updateNote);
router.post('/deleteNote', deleteNote);
router.get('/getNotes', getNotes);

module.exports = router