var Todo = React.createClass({
  getInitialState() {
        return {editable: false}
  }, 

  handleEdit(){
    if(this.state.editable) {
        var name = this.refs.name.value;
        var id = this.props.todo.id;
        var description = this.refs.description.value;
        var todo = {id: id , name: name , description: description};
        this.props.handleUpdate(todo);

    }
    this.setState({ editable: !this.state.editable })
  },
  
  render(){
    var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.todo.name} /> : <h3>{this.props.todo.name}</h3>;
    var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.todo.description} />: <p>{this.props.todo.description}</p>;
    return (
      <div>
        {name}
        {description}
        <button onClick={this.props.handleDelete} >Delete</button>
        <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' }</button>
      </div>
    )
  }
});