import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactTable from 'react-table';
import Popup from "reactjs-popup";
import "react-table/react-table.css";
import './css/todostyle.css';



class TodoSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      searchstring: "",
      updatestring:"",
      userTask: "",      
      currentItem: { id: 0, task: "" },
      updated_id: 0,
      open: false    
    };
    this.handleChange = this.handleChange.bind(this);    
    this.handleChangeTask = this.handleChangeTask.bind(this);
    this.handleAdd = this.handleAdd.bind(this);    
    this.UpdateItem = this.UpdateItem.bind(this);
    this.DeleteItem = this.DeleteItem.bind(this);
    this.ClosePopup = this.ClosePopup.bind(this);
    this.OpenPopup = this.OpenPopup.bind(this);
    this.handleUpdateString = this.handleUpdateString.bind(this);
  }
  
  UpdateItem = (id)=>{    
    let _tasks = this.state.tasks;
    let updatedtask = _tasks.filter((el) => {                
      return el.id === id
    })        
    _tasks.map((el,index)=> {
      if (el.id === updatedtask[0].id) {                
        return _tasks[index].task = this.state.updatestring
      }else{                
        return _tasks
      }
    })  
    
    this.setState({
     tasks: _tasks,      
     open:false,
     updatestring:''
    })
  }
  OpenPopup(udpateID){
    this.setState({ 
      open: true,
      updated_id: udpateID
    })
  }
  ClosePopup () {
    this.setState({ open: false })
  }
  DeleteItem = (id) =>{    
    let _tasks = this.state.tasks;
    _tasks = _tasks.filter((el) => {                
        return el.id !== id
    })
    this.setState({
        tasks: _tasks
    })
  }  
  handleAdd() {
    let tasks = this.state.tasks;    
    let task = this.refs.task.value;
    let currentItem = this.state.currentItem;
    var _id;
    if (tasks.length > 0 ) {
        _id = tasks[tasks.length-1].id + 1 

    }else{
        _id = currentItem.id + 1 
    }    
    currentItem = { id: _id, task: task };
    tasks.push(currentItem);

    this.setState({
      tasks: tasks,
      userTask: ""
    });
  }  
  handleUpdateString(e) {
    this.setState({
      updatestring: e.target.value
    });
  }
  handleChangeTask() {
    this.setState({
      userTask: this.refs.task.value
    });
  }
  handleChange() {
    this.setState({
      searchstring: this.refs.search.value
    });
  }
  render() {
    let _tasks = this.state.tasks;
    let search = this.state.searchstring.trim().toLowerCase();

    if (search.length > 0) {
      _tasks = _tasks.filter(function(user) {
        return user.task.toLowerCase().match(search);
      });
    }
    const columns = [{
        Header: 'ID',
        width:50,        
        accessor: 'id' // String-based value accessors!
        
      },  {
        id: 'task', // Required because our accessor is not a string
        Header: 'User Task', 
        // width: 100,              
        accessor: 'task'// Custom value accessors!
      },{
        id: 'action',         
        Header: 'User Actions',    
        width:200,           
        accessor: (e)=>{                        
            return(
                <div>                                        
                    <button className="btn btn-success" onClick={()=>{this.OpenPopup(e.id)}}>Update</button>
                    <button className="btn btn-danger" onClick={()=>{this.DeleteItem(e.id)}}>Delete</button>
                </div>
            )
        }
      }
    ]
    return (
      <div>  
         <Popup open={this.state.open} closeOnDocumentClick onClose={this.ClosePopup}>
          <div >                                                                       
            <input type="text" value={this.state.updatestring} onChange={this.handleUpdateString}/>
            <button onClick={()=>{this.UpdateItem(this.state.updated_id)}}>Done</button>                        
          </div>
        </Popup>        
        <input
          type="text"
          value={this.state.userTask}
          ref="task"
          className="inputwidth"
          onChange={this.handleChangeTask}
          placeholder="Enter task"
        />{" "}
        {""}
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <hr />
        <div>
          <input
            type="text"
            value={this.state.searchstring}
            ref="search"
            className="searchwidth"
            onChange={this.handleChange}
            placeholder="Search User by Name"
          />
          <i className="fa fas fa-search" />
        </div>
        <hr/>
        <div className="tablemargin">
            <ReactTable 
                data={_tasks} 
                columns={columns} 
                defaultPageSize={10}                
            />
        </div>       
      </div>
    );
  }
}
export default TodoSimple;
