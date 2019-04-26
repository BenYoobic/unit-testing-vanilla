function todo() {
    this.todo = [];
}

todo.prototype.addTodo = function (item) {
    this.todo.push(item)
}

todo.prototype.getItems = function () {
    return this.todo
}

todo.prototype.delete = function (id) {
    this.todo = this.todo.filter(item => item.id !== id)
}

todo.prototype.complete = function (id) {
    this.todo.find(item => item.id == id).complete = true;
}