const mongoose = require("mongoose");

const schema = mongoose.Schema;

const Todo = new schema({
	title: {
		type: String,
		required: true,
		minLength: 5,
	},
	description: {
		type: String,
	},
	completed: {
		type: Boolean,
		default: false,
	},
	popular: {
		type: Boolean,
		default: false,
	},
	created: {
		type: Date,
		default: Date.now,
	},
});

Todo.index({ title: "text", description: "text" });

module.exports = mongoose.model("Todo", Todo);
