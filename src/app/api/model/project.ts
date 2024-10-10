import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    clientName: {
        type:String,
        required:true
    },
    nameConf: {
        type:Boolean,
        required:true
    },
    teamSize: {
        type: Number,
        required: false,
    },
    website: {
        type: String,
        required: false,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    project: {
      type: Object,
      required: false
    },
    technologies: {
        type: Object,
        required: false,
    },
    projectOverview: {
        type: String,
        required: true,
    },
    challenges: {
        type: String,
        required: false
    },
    images: {
        type: Array,
        required: false
    },
    featured: {
        type: Boolean,
        required: true
    }
   
})

export default mongoose.models.Project || mongoose.model('Project', postSchema)