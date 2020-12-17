const jwt = require('jsonwebtoken')
const fetch = require('node-fetch')
const secret = process.env.JWT_SECRET

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        res.status(400).json({ message: 'Bad Request' })
    } else {
        const token = await jwt.sign({ isAllowed: true }, secret)
        const headers = {
            'x-mcbridem-auth-token': token,
            'Content-Type': 'application/json'
        }
        const payload = {
            userAgent: req.headers['user-agent'],
            host: req.headers.host,
            timeZone: req.body.timeZone,
            locale: req.body.locale,
            pathname: req.body.pathname
        }

        try {
            const response = await fetch('https://analytics.mcbrid.es/api/pageview', {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: headers
            })
            res.send(response)
        } catch (error) {
            res.status(500).json({ error })
        }
    }
}
