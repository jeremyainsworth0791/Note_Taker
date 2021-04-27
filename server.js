const express = require("express");
const api = require("./routes/api-routes");
const app = express();
const htmlRoute = require("./routes/html-routes")
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(express.static("public"));
app.use("/api", api);
app.use("/", htmlRoute);

app.listen(PORT, () => console.log(`the server is runnins on Port ${PORT}`));