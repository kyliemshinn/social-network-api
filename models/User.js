

const userSchema = new user.Schema({
    username: {type: String, unique: true, required: true, trim: true},
    email: {type: String, required: true, unique: true, match: [/.+@.+\..+/]},
    //will need thoughts
    //will need friends
});
