import React, { Component } from 'react';
import './App.css';
import TOC from './components/Toc';
import Subject from './components/Subject';
import Content from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Control from './components/Control';

class App extends Component {
  constructor (props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'create',
      selected_content_id: 2,
      welcome: {title: 'Welcome', desc: 'Hello, React!!'},
      subject: {
        title: "web",
        sub: "world wide web!"
      },
      contents: [
        {id:1, title:"HTML", desc: "HTML is for information"},
        {id:2, title:"CSS", desc: "CSS is for design"},
        {id:3, title:"JavaScript", desc: "JavaScript is for interactive"}
      ]
    }
  }
  render() {
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <Content title={_title} desc={_desc}></Content>
    }else if (this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
      _article = <Content title={_title} desc={_desc}></Content>
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        this.max_content_id++;
        // 배열 복제 : Arrays.from(a), 객체 복제 : Object.assign({}, a)
        var _contents = this.state.contents.concat({id: this.max_content_id, title: _title, desc: _desc});
        this.setState({
          contents: _contents
        })
      }.bind(this)}></CreateContent>
    }
    return (
      <div>
        <h1>React</h1>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub} 
        onChangePage = {function() {
          this.setState({mode: 'welcome'});
        }.bind(this)}></Subject>
        <TOC data = {this.state.contents} onChangePage = {function(id){
          this.setState({
            mode: 'read',
            selected_content_id: Number(id)
          });
        }.bind(this)}></TOC>
        <Control onChangeMode={function(mode) {
          this.setState({
            mode: mode
          })
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
