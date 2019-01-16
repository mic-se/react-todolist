import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import Error from './Error';

@inject('store')
@observer
class TodoCreate extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { store } = this.props;
    const { addItem, addForm } = store;
    addItem(addForm);
  };

  onChange = (e) => {
    const { store } = this.props;
    const { addForm } = store;
    addForm[e.target.name] = e.target.value;
  };

  onClickCheckbox = (e) => {
    const { store } = this.props;
    const { addForm } = store;
    addForm.isDone = e.target.checked;
  };

  render() {
    return (
      <div>
        <Link to="/">
          <button type="button" className="ui button primary">List</button>
        </Link>
        <h2>Add new todo</h2>
        <Error />
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" onChange={this.onChange} />
          </div>
          <div className="field">
            <label htmlFor="content">Content: </label>
            <textarea name="content" id="content" onChange={this.onChange} />
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input
                type="checkbox"
                name="isDone"
                onClick={this.onClickCheckbox}
                defaultChecked={this.isDone}
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
