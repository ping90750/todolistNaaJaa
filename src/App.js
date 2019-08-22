import React from 'react';
import logo from './logo.svg';
import './App.css';

const newLocal = 'yellow';
const todoText = []


class TodoList extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      todoText: '',
      todoList:[]
   };
  }
 
  handleChange = event => {
    this.setState({ todoText: event.target.value });
    console.log(this.state.todoText)
  };

  handleClick = e => {
    this.state.todoList.push(this.state.todoText)
    this.setState({todoText:""})
    console.log(this.state.todoList)
  }
 
  render() {
    return (
          <div className="App">
            <header className="App-header">
            <h1>TODO LIST </h1>
            
            <div style={{
              width : '1200px',
              height : '700px',
              color : "#000",
              borderRadius : '20px',
              boxShadow : '5px 10px rgba(0,0,0,0.1)' 
            }}>
      
            <div style={{
              height: '100px',
              borderRadius : '20px 20px 0px 0px',
              backgroundImage: 'linear-gradient(to right top, #051937, #4c275c, #9a2962, #d84148, #f07d00)',
      
              }}>
              <input type='text' style={{
                borderRadius : '5px',
                margin: "30px 0px",
                padding: "10px",
                width: "680px",
                border: "none"
              }} onChange={this.handleChange}></input>
      
              <button style={{
                  borderRadius : '5px',
                  width: "100px",
                  margin: "30px 0 0 10px",
                  padding: "9px",
                  boxShadow: '0 2px #999',
              }} onClick={this.handleClick}>Add</button>
            </div>
      
            <div style={{
              background: "white",
              borderRadius : '0 0 20px 20px',
              height: "540px",
              display: "flex",
              padding: "30px",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}>

                  {/* {this.state.todoList.map((coin, i) => {
                                    return (
                                      <div key={i}>{coin}</div>
                                    );
                  })} */}
            
            {this.state.todoList.map((coin, i) => {
                        return (
                          <div style={{
                            width : '800px',
                            height : '155px',
                            alignContent : 'center',
                            borderStyle : 'solid',
                            borderRadius : '10px',
                            color: 'black',
                            backgroundColor : 'white',
                            boxShadow: '3px 3px #999',
                          }} key={i}>
                            <div style={{
                              margin: '15px',
                              height: '280px',
                              width : '780px',
                              color: 'black',
                              textAlign: 'left',
                              fontWeight: 'bold',
                            }}>Title
                            <hr style={{
                              backgroundColor: 'purple',
                              height: '1px',
                            }}/>
                          <div style={{
                              margin: '10px',
                              height: '280px',
                              width : '780px',
                              color: 'black',
                              textAlign: 'left',
                              fontSize: '16px',
                              fontWeight: 'normal',
                            }}>{coin}
                              
                              <div style={{
                                textAlign: 'right',
                                paddingRight: '30px',
                                marginTop: '25px',
                              }}>
                  
                              <button style={{
                                borderRadius : '5px',
                                width: "100px",
                                padding: "9px",
                                marginRight: "10px",
                                border: '2px solid #00F00A',
                                backgroundColor: '#00F00A',
                                color: '#000',
                                boxShadow: '0 3px #999',
                              }}>Done</button>
                  
                              <button style={{
                                borderRadius : '5px',
                                width: "100px",
                                padding: "9px",
                                border: '2px solid #B7052C',
                                backgroundColor: '#B7052C',
                                color: '#fff',
                                boxShadow: '0 3px #999',
                              }}>Delete</button></div>
                              </div>
                            </div>
                          </div>
                        );
                      })}

            </div>
              </div>
            </header>
          </div>
        );
  }
 }



export default TodoList;
