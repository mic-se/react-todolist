import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import Error from './Error';

@inject('store')
@observer
class TodoCreate extends React.Component {
  componentDidMount() {
    const { store: { resetForm, clearError } } = this.props;
    resetForm();
    clearError();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      store: { addItem, form },
      history
    } = this.props;

    addItem(form).then(() => {
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
        <h2>Add new todo</h2>
        <Error />
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
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

export default TodoCreate;
