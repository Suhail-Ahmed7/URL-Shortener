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