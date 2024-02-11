const postModel = require('../../database/models/PostModel')
// const cloudinary = require('cloudinary').v2
      
// cloudinary.config({ 
//   cloud_name: 'dixniotyg', 
//   api_key: '471336258875898', 
//   api_secret: 'U13jKIyrfNeo4_c0-iKYlarGFrU',
// })

// const options = {
//     use_filename: true,
//     unique_filename: false,
//     overwrite: true,
// }

const getAll = async (req, res) => {
    await postModel.fetchAllPost()
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}

const getLikesComments = async (req, res) => {
    const id = req.params.id
    await postModel.fetchLikesComments(id)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

const addPost = async (req, res) => {
    const body = req.body.body
    const file = req.body.file
    const userId = req.params.userid
    try{
        postModel.createPost(body, file, userId)
        .then((result)=>{
            res.status(201).json(result)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    }
    catch(err){
        res.status(500).json(err)
    }
}

const editPost = async (req, res) => {
    const body = req.body.body
    const file = req.body.file
    const id = req.params.id
    try{
        const data = {body: body, file: file}
        postModel.updatePost(id, data)
        .then((result)=>{
            res.status(201).json(result)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    }
    catch(err){
        res.status(500).json(err)
    }
}

const deletePost = (req, res) => {
    const id = req.params.id
    try{
        const result = postModel.deletPost(id)
        res.status(200).json(result)
    }
    catch(err){
        res.status(500).json(err)
    }
}

module.exports = {getAll, getLikesComments, addPost, editPost, deletePost}