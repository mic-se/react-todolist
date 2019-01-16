import { observable, action, computed } from 'mobx';
import uuid from 'uuid';
import history from './history';

class TodoStore {
  @observable items = [
    {
      id: uuid(),
      name: 'test1',
      content: 'test content1',
      isDone: false
    },
    {
      id: uuid(),
      name: 'test2',
      content: 'test content2',
      isDone: true
    },
    {
      id: uuid(),
      name: 'test3',
      content: 'test content23',
      isDone: true
    }
  ];

  addForm = {
    name: '',
    content: '',
    isDone: ''
  };

  @observable error = '';

  @action
  addItem = (form) => {
    const data = form;
    this.error = '';
    if (data.name === '' || data.content === '') {
      this.error = 'empty field(s)';
      return;
    }

    const found = this.items.find((element) => {
      return element.name === data.name;
    });

    if (found !== undefined) {
      this.error = 'name exists';
      return;
    }

    data.id = uuid();
    this.items.push(data);
    history.push('/');
  };

  @action
  removeItem = (item) => {
    const { items } = this;
    for (let i = items.length; i--;) {
      if (items[i].name === item.name) {
        items.splice(i, 1);
      }
    }
  };

  @computed
  get countCompletedTasks() {
    const { items } = this;
    let completed = 0;
    for (let i = items.length; i--;) {
      if (items[i].isDone) {
        completed++;
      }
    }

    return completed;
  }

  @computed
  get countTotalTasks() {
    return this.items.length;
  }
}

const todoStore = new TodoStore();
export default todoStore;
