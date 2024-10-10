import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    introduction: {
        type: String,
        required: true,
    },
    nameConf: {
        type: Boolean,
        required: true,
    },
})

export default mongoose.models.Post || mongoose.model('Post', postSchema)