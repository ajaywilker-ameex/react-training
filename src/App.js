import React from 'react';
// import ReactDOM from 'react-dom';
import './assets/css/style.css';
import Card from './components/card/Card';

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          tableContent: [],
          title: '',
          amoount: '',
          aplText: 'Add Item',
          edtKey: ''
      };
    }

    addItem(event) {
      if (this.state.aplText == 'Add Item'){
          console.log(this.state.edtKey);
        let randomID = Math.floor(Math.random() * 999999);
        let newTab = this.state.tableContent;
        newTab.push({
          key: randomID,
          title: this.state.title,
          description: this.state.description
        });
        this.setState({
          title: '',
          description: ''
        });
        this.setState({
          tableContent: newTab 
        });
      } else {
        if(this.state.edtKey != ''){
          const elementsIndex = this.state.tableContent.findIndex(element => element.key == this.state.edtKey )
          let newArray = [...this.state.tableContent];
          newArray[elementsIndex].title = this.state.title;
          newArray[elementsIndex].description = this.state.description;
          console.log(elementsIndex);
          this.setState({
            tableContent: newArray,
            title: '',
            description: '',
            edtKey: "",
            aplText: 'Add Item'
          });
        }
      }
      event.preventDefault();
    }

    changeEvent(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    removeItem(item) {
      const tableContent = this.state.tableContent.filter(i => i.key !== item.key)
      this.setState({tableContent})
      this.setState({
        title: '',
        description: '',
        edtKey: ""
      });
    }

    editItem(item) {
      this.setState({
        title: item.title,
        description: item.description,
        aplText: 'Save Item',
        edtKey: item.key
      });
    }

    render() {
    return (
      <section className="App container">
        <section>
          <form className="form">
              <h1>TODO List</h1>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="title">Title</label>
                </div>
                <div className="col-75">
                  <input type="text" value={this.state.title} name="title" onChange={this.changeEvent.bind(this)}/>
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="description">Description</label>
                </div>
                <div className="col-75">
                  <input type="text" value={this.state.description} name="description" onChange={this.changeEvent.bind(this)}/>
                </div>
              </div>
              <input type="hidden" id="custId" name="custId" value={this.state.edtKey} />
              <div className="row">
                <button type="button" id="add" onClick={this.addItem.bind(this)}>{this.state.aplText}</button>
              </div>
          </form>

          <section>
            <table id="todo">
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Edit Item</th>
                  <th>Remove Item</th>
                </tr>
              </thead>
              <tbody>
                {this.state.tableContent.map((item) => 
                  <tr key={item.key}>
                    <td>{item.key}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td id="align-ctr">
                      <button type="button" id="edit" onClick={this.editItem.bind(this, item)}>Edit Item</button>
                    </td>
                    <td id="align-ctr">
                      <button type="button" id="remove" onClick={this.removeItem.bind(this, item)}>Remove item</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
        </section>
        <Card />
      </section>
    );
  }
}

export default App;
