const likeModel = require('../../database/models/LikeModel')

const like = (req, res) => {
    const postId = req.params.postid
    const userId = req.body.userId
    try{
        likeModel.saveLike(postId, userId).then((result)=>{
            res.status(201).json(result)
        })
        
    }
    catch(err){
        res.status(500).send(err)
    }
}

const dislike = (req, res) => {
    const id = req.params.id
    try{
        likeModel.deletLike(id)
        res.status(200).send('like deleted')
    }
    catch(err){
        res.status(500).send(err)
    }
}

const numbersOfLikes = async (req, res) => {
    const id = req.params.id
    try{
        const result = await likeModel.countLikes(id)
        res.status(200).json(result)
    }
    catch(err){
        res.status(500).send(err)
    }
}

module.exports = {like, dislike, numbersOfLikes}