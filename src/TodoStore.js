import { observable, action, computed } from 'mobx';
import api from './api';

class TodoStore {
  @observable items = [];

  @observable form = {
    name: '',
    content: '',
    isDone: 0
  };

  @observable error = '';

  @action resetForm = () => {
    this.form = {
      name: '',
      content: '',
      isDone: 0
    };
  }

  @action clearError = () => {
    this.error = '';
  }

  @action getItems = () => {
    return api
      .get('/')
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  };

  @action getItem = (id) => {
    return api
      .get(`/${id}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  };

  @action loadItems = () => {
    this.getItems().then(({ data }) => {
      this.items = data;
    });
  };

  @action loadItem = (id) => {
    this.getItem(id).then(({ data }) => {
      this.form = data;
    });
  };

  @action addItem = (item) => {
    this.errors = '';
    return api.post('/', item).catch((error) => {
      if (error.response) {
        this.error = error.response.data.message;
      }

      throw error;
    });
  };

  @action editItem = (item) => {
    this.errors = '';
    return api.put(`/${item._id}`, item).catch((error) => {
      if (error.response) {
        this.error = error.response.data.message;
      }

      throw error;
    });
  };

  @action removeItem = (item) => {
    api
      .delete(`/${item._id}`)
      .then(() => {
        const filteredItem = this.items.filter((elem) => {
          return elem._id !== item._id;
        });
        this.items.replace(filteredItem);
      })
      .catch((error) => {
        throw error;
      });
  };

  @computed get countCompletedTasks() {
    return this.items.filter((item) => {
      return item.isDone;
    }).length;
  }

  @computed get countTotalTasks() {
    return this.items.length;
  }
}

export default new TodoStore();
