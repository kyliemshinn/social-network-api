

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: String, required: true, minlength: 1, maxlength: 280},
    createdAt: {type: Date, default: Date.now, /*use getter method to format the time stamp on query */},
    username: { type: String, required: true}
    

})
