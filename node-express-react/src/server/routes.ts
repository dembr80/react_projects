import * as express from 'express';

import DB from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('api/havi', async (req, res) => {
    try{ 
        let havi = await DB.Havi.all();
        res.json(havi);
       } catch(e) {
           console.log(e);
           res.sendStatus(500);
       }
})

export default router;