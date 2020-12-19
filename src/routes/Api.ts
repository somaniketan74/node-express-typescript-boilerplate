import { Router, Request, Response } from 'express';

import Locals from '../providers/Locals';

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    res.json("successfull");
});

export default router;