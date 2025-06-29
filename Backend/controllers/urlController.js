const { nanoid } = require('nanoid')
const URL = require('../models/url')

const createURL = async (req, res) => {
    const { originalUrl } = req.body;

    if (!originalUrl) {
        return res.status(400).json({ error: 'Original URL is required' });
    }

    const shortUrl = nanoid(7);
    try {
        const newUrl = await URL.create({
            originalUrl,
            shortUrl,
            createdAt: new Date(),
            visits: 0,
            clickTimestamps: []
        });
        res.status(201).json(newUrl);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
};

const getUrlById = async (req, res) => {
    const { shortUrl } = req.params;
    try {
        const urlEntry = await URL.findOne({ shortUrl })
        if (!urlEntry) {
            return res.status(404).json({ error: 'Short URL not found' });
        }
        await URL.updateOne({ shortUrl }, {
            $inc: { visits: 1 },
            $push: { clickTimestamps: new Date() }
        })
          res.redirect(urlEntry.originalUrl);
    } catch (error) {
        res.status(500).json({ error: 'Redirection error' });
    }
}

module.exports = {
    createURL,
    getUrlById
}