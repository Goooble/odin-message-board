import {Router} from 'express'

const indexRouter = Router();

indexRouter.get('', (req,res) => {
    console.log("indexRouter called");
    res.render('index');
})

export default indexRouter;