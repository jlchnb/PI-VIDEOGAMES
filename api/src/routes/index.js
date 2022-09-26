const { Router } = require('express');

// Importar todos los routers;
const vgameRouter = require('./middlewares/videogames');
const genreRouter = require('./middlewares/genre');
const platformRouter = require('./middlewares/platforms');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames',vgameRouter);
router.use('/genres',genreRouter);
router.use('/platforms',platformRouter);


module.exports = router;
