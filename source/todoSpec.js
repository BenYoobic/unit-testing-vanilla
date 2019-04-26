// https://dev.to/aurelkurtula/unit-testing-with-vanilla-javascript-the-very-basics-7jm

describe('Testing functionality, this is a checklist', () => {
    it('should add a new todo item', () => {
        let todoInstance = new todo();
        let item = {
            title: 'check code',
            completed: false
        }
        const done = todoInstance.addTodo(item);
        expect(todoInstance.getItems().length).toBe(1);
    });

    it('should delete an item', () => {
        let todoInstance = new todo();
        let item = {
            id: 1,
            title: "get milk 1",
            complete: false
        }
        let item2 = {
            id: 2,
            title: "get milk 2",
            complete: false
        }
        todoInstance.addTodo(item)
        todoInstance.addTodo(item2)
        todoInstance.delete(2)
        expect(todoInstance.getItems()[todoInstance.getItems().length - 1].id).toBe(1);
    });

    it('should mark item as complete', () => {
        let todoInstance = new todo();
        let item = {
            id: 1,
            title: "get milk 1",
            complete: false
        }
        let item2 = {
            id: 2,
            title: "get milk 2",
            complete: false
        }
        todoInstance.addTodo(item)
        todoInstance.addTodo(item2)
        todoInstance.complete(2)
        expect(todoInstance.getItems().find(item => item.id == 2).complete).toBe(true);
    })
});