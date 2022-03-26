const connectToMongo = require('./connectToDB')();
const express = require("express")
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", require('./Routes/auth.js'));
app.use('/post', require('./Routes/createPost'));
app.use('/product', require('./Routes/Products'));
app.use('/address', require("./Routes/address"));
;
app.listen(5000, () => {
    console.log('app is running on port 5000');
})