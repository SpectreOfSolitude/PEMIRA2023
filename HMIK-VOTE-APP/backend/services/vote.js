const collection = require('../db');

const voteServices = {
    getAll: async (req, res) => {
        const data = await collection.Poll.find().toArray();        
        res.status(200).json({
            status: 200,
            message: 'success',
            data
        });
    },

    updateVoteAmount: async (req, res) => {
        const candidate = req.body.candidate;
        const query = { candidate };

        await collection.Poll.updateOne(query, { $inc: { voteAmount: 1 } });
        res.status(200).json({
            status: 200,
            message: 'success',
        });
    }
}

module.exports = voteServices;