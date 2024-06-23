console.log("jithu");
const app = require('./app')
const {PORT}= process.env
app.listen(PORT,()=>{
    console.log(`SERVER running at port ${PORT}`);
})