import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const dbURI = 'mongodb+srv://user1:<db_password>@cluster0.xwz9t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) =>console.log(err));

app.get('/', (req, res) => {
    res.send('Welcome to the CRUD API')
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})