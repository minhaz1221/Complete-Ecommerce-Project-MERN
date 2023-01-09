const app =  require("./app");
require('dotenv').config({path: "Backend/config/config.env"});
const PORT = process.env.PORT || 3000
//Handling Uncaugth Exception
process.on("uncaughtException", err => {
    console.log(`Error: --> ${err.message}`);
    console.log("Shutting Down this server due to Uncaugth Exception");
    process.exit(1);
})


const server = app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT} successfully`);
});


//Unhendled Promise Rejection
process.on("unhandledRejection", err => {
    console.log(`Error: --> ${err.message}`);
    console.log("Shutting Down this server due to Unhandled Promise Rejection");
    server.close(() => {
        process.exit(1);
    })
})
