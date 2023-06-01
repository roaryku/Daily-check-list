// apps routing steps

const { Router } = require('express');
const { getList, saveList, deleteList, editList} = require('./DailyController');

const router = Router();

router.get('/', getList);
router.post('/saveList', saveList);
router.post('/deleteList', deleteList);
router.post('/editList', editList)


module.exports = router;