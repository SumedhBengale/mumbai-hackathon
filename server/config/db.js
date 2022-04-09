const mongoose = require('mongoose')

const connetwithdb = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewURLParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log(`connected to database succesfully`))
    .catch(error => {
        console.log(`DB connection failed`);
        console.log(error)
        process.exit(1)
    })

}

module.exports = connetwithdb