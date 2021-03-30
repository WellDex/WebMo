const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    projects: [{ type: Types.ObjectId, ref: 'Project' }],
});

module.exports = model('User', schema);