const app =  require("./app");
require('dotenv').config({path: "Backend/config/config.env"});
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT} successfully`);
})