import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import router from "./routes";
import multer from "multer";

const app = express();

mongoose.Promise = global.Promise;
const dbUrl = "mongodb://localhost:27017/dbseseay";
mongoose
    .connect(dbUrl, { useCreateIndex: true, useNewUrlParser: true })
    .then((mongoose) => console.log('db connected:', dbUrl))
    .catch((err) => console.log(err));

app.use(morgan("dev"));
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const storage = multer.diskStorage({
    destination: path.join(__dirname, "documentos/"),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

app.use(
    multer({
        storage,
    }).single("file")
);

app.use(express.static('documentos'));


app.use("/api", router);
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
    console.log("Server port " + app.get("port"));
});