import React from 'react';

class TodoCreate extends React.Component {
  state = {
    name: '',
    content: '',
    isDone: false,
    error: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, content } = this.state;
    const { onError, onAddTodo } = this.props;

    if (name === '' || content === '') {
      this.setState(
        {
          error: 'empty field(s)'
        },
        () => {
          return onError(this.state);
        }
      );
      return;
    }

    onAddTodo(this.state);
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onClickCheckbox = (e) => {
    this.setState({
      isDone: e.target.checked
    });
  };

  render() {
    return (
      <div>
        <h2>Add new todo</h2>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="field">
            <label htmlFor="content">Content: </label>
            <textarea
              name="content"
              id="content"
              value={this.content}
              onChange={this.onChange}
            />
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
