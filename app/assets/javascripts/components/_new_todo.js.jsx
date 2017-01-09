var NewTodo= React.createClass({
  handleClick() {
    var name    = this.refs.name.value;
    var description = this.refs.description.value;
    $.ajax({
      url: '/api/v1/todos',
      type: 'POST',
      data: { todo: { name: name, description: description } },
      success: (todo) => {
        this.props.handleSubmit(todo);
      }
    });  
  },

    render() {
        return (
            <div>
                <input ref='name' placeholder='What is the name of the todo' />
                <input ref='description' placeholder='Enter a description' />
                <button onClick={this.handleClick}>Submit</button>
              </div>
        )
    }
});