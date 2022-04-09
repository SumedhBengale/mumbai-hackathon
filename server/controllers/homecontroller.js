const BigPromise = require('../middleware/bigPromise')

exports.home = BigPromise(async (req, res) => {
    // const db = await something();
    res.status(200).json({
        success: true,
        greeting: "hello from api",
    });
});