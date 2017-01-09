var Body = React.createClass({
  getInitialState(){
    return { todos: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/todos.json', (response) => { this.setState({ todos: response}) });
  },

  handleSubmit(todo) {
        var newState = this.state.todos.concat(todo);
        this.setState({ todos: newState })
    },

  render() {
    return (
      <div>
        <NewTodo handleSubmit={this.handleSubmit} />
        <AllTodos todos={this.state.todos} />
      </div>
    )
  }
});