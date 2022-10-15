import app from 'express'

const routes = app.Router();

routes.get('/', (req, res) => {
    res.json({msg: 'Home'})
});

export default routes;