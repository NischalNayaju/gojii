const router = require('express').Router();
const verify= require('./verifyToken');
router.get('/posts', verify,(req,res) =>{
res.json({
    posts:{
        title:'Gojii digital wallet',
        description:'Major Project BCT'
    }

});
});



module.exports = router;