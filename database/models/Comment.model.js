const mongoose = require('mongoose');
const schema = mongoose.Schema();

const commentSchema = schema({
    message: {type: String, required: [true, "Le commentaire ne peut etre vide."]},
    author: {type: schema.Types.objectId, ref: 'user', required: true}
}, {
    timestamps: true
})

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;