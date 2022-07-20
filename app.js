const express = require('express');
const bodyParser = require("body-parser");
const config = require('config');
const cors = require('cors');
let path = require("path")

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/shops.routes")(app);
require("./routes/shopping_card.routes")(app);

const PORT = config.get('port') || 5000;

app.use(express.static(path.join(__dirname, 'build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + './build/index.html'));
});

async function start(){
            app.listen(PORT, () => console.log(`App has been started, port -  ${PORT}`));
}

start();



