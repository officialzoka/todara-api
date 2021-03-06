const Todo = require("../models/Todo");
const router = require("express").Router();

// @route   GET v1/todo
router.get("/", async (req, res) => {
	const todos = await Todo.find().select(["-__v"]).sort({ created: -1 });
	if (!todos) {
		return res.status(404).json({ error: "No todos found" });
	}
	res.status(200).json(todos);
});

// get a todo by id
router.get("/:id", async (req, res) => {
	const todo = await Todo.find({ _id: req.params.id }, "-__v -created");
	if (!todo) return res.status(404).send("Todo not found");
	res.status(200).json(todo);
});

// create a new todo
router.post("/create", async (req, res) => {
	if (!req.body) {
		return res.status(404).json({ error: "No data provided" });
	}
	let todo = new Todo({
		title: req.body.title,
		description: req.body.description,
		popular: req.body.popular 
	});
	await todo.save();
	res.status(200).json(todo);
});

// update todo
router.put("/update", async (req, res) => {
	const todo = await Todo.findByIdAndUpdate(
		{ _id: req.body.id },
		{
			$set: req.body
		},
		{ new: true }
	);
	if (!todo) return res.status(404).send("Todo not found");
	res.status(200).json({ message: "Todo updated" });
});

// delete todo
router.delete("/remove/:id", async (req, res) => {
	const todo = await Todo.findByIdAndRemove({ _id: req.params.id });
	if (!todo) return res.status(404).send("Todo not found");
	res.status(200).json({ message: "Todo deleted" });
});

// search todo
router.post("/search", async (req, res) => {
	const todo = await Todo.find({ $text: { $search: req.body.query } });
	if (!todo) return res.status(404).send("Todo not found");
	res.status(200).json(todo);
});

module.exports = router;
