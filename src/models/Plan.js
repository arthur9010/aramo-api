const mongoose = require('mongoose')
const PlanSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    unitTime: {
        type: String,
        required: true
    },
    rateException: {
        type: Number,
        required: true
    }
})

mongoose.model('Plan', PlanSchema)