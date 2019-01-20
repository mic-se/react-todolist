import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import Error from './Error';

@inject('store')
@observer
class TodoEdit extends React.Component {
  componentDidMount() {
    const {
      store: { loadItem, resetForm, clearError },
      match: {
        params: { id }
      }
    } = this.props;

    resetForm();
    clearError();
    loadItem(id);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      store: { editItem, form }
    } = this.props;
    editItem(form).then(() => {
      const { history } = this.props;
      history.push('/');
    });
  };

  render() {
    const {
      store: { form }
    } = this.props;

    return (
      <div>
        <Link to="/">
          <button type="button" className="ui button primary">
            List
          </button>
        </Link>
        <h2>Edit todo</h2>
        <Error />
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={(e) => {
                form.name = e.target.value;
              }}
            />
          </div>
          <div className="field">
            <label htmlFor="content">Content: </label>
            <textarea
              name="content"
              id="content"
              value={form.content}
              onChange={(e) => {
                form.content = e.target.value;
              }}
            />
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input
                type="checkbox"
                name="isDone"
                onChange={(e) => {
                  form.isDone = e.target.checked;
                }}
                checked={form.isDone}
              />
              <label htmlFor="isDone">Done? </label>
            </div>
          </div>
          <button type="submit" className="ui submit button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default TodoEdit;
