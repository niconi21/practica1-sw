const express = require('express');
const cors = require('cors');

class App {


    constructor() {
        this.app = express();
        this.middlewares();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use('/api/v1', require('../routes/index.routes'));
    }

    listen() {
        this.app.listen(process.env.PORT || 3000, (error) => {
            if (error) return console.log(error);
            else return console.log(`Listening on port ${process.env.PORT}`);
        })
    }

}

module.exports = App;