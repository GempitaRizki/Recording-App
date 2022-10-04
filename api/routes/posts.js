import express from 'express'

const router = express.Router()

router.get('/test', (req,res) => {
    res.json('ini adalah post')
})

export default router