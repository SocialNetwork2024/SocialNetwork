const commentModel = require('../../database/models/CommentModel')

const addComment = (req, res) => {
    const postId = req.params.postid
    const data = req.body.content
    const userId = req.body.userId

    commentModel.createComment(postId, userId, data)
    .then((result)=>{
        res.status(201).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}

const editComment = (req, res) => {
    const id = req.params.id
    const data = req.body.content
    commentModel.updateComment(id, {content: data})
    .then((result)=>{
        res.status(201).json(result)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

const deleteComment = (req, res) => {
    const id = req.params.id
    commentModel.deleteComment(id)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

// const getAll=(req,res)=>{
//     commentModel.getComment({})
//     .then((result)=>{
//         res.status(200).json(result)
//     })
//     .catch((err)=>{
//         res.status(500).send(err)
//     })
// }

module.exports = {addComment, editComment, deleteComment
    // ,getAll
}