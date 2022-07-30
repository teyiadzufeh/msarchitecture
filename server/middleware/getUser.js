const User = require('../models/user')

const getUser =  async (req, res, next) => {
    let user
    try {
        user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find subscriber' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.mesage })
    }

    res.user = user
    next()
}

module.exports = getUser;