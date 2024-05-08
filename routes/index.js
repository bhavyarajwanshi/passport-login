const express = require('express')

const app = express();

const router = express.Router();

router.get("/",(req,res)=>{

    res.send("welcome to the main page");
})


module.exports = router;