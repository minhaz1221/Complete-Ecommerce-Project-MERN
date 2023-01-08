const mongoose = require('mongoose');
require('dotenv').config({path: "Backend/config/config.env"});

//For closing mongoose warning
mongoose.set('strictQuery', true);

mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log(`MongoDb is connected succesfully`);
})
.catch((err) => {
    console.log(err.message);

})