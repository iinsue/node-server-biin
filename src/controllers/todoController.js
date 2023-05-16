import Todo from "../models/Todo";

export const createTodo = async (req, res) => {
  const todo = req.body.todo;
  const todoType = req.body.todoType;
  try {
    await Todo.create({
      todo,
      todoType,
    });
    return res.status(200).send({ code: 200, message: "Create Success" });
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const readTodo = async (req, res) => {
  try {
    const todoList = await Todo.find(req.query).exec();
    return res.status(200).send(todoList);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.body._id);
    return res.status(200).send({ code: 200, message: "Delete Success" });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

export const mutateTodo = async (req, res) => {
  try {
    await Todo.findByIdAndUpdate(req.body._id, {
      todo: req.body.todo,
      todoType: req.body.todoType,
    });
    return res.status(200).send({ code: 200, message: "Mutate Success" });
  } catch (error) {
    return res.status(400).send(error);
  }
};
