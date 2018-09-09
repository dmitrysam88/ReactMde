import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMde, {ReactMdeTypes} from 'react-mde';
import * as Showdown from 'showdown';


export interface AppState {
    mdeState: ReactMdeTypes.MdeState;
}

class App extends Component {

    converter: Showdown.Converter;

    constructor(props) {
        super(props);
        this.state = {
            mdeState: {

                markdown: '**Hello world!**',

            },
        };
        this.converter = new Showdown.Converter({tables: true, simplifiedAutoLink: true});
    }

    handleValueChange = (mdeState: ReactMdeTypes.MdeState) => {
        this.setState({mdeState});
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <ReactMde
              onChange={this.handleValueChange}
              editorState={this.state.mdeState}
              generateMarkdownPreview={(markdown) => Promise.resolve(this.converter.makeHtml(markdown))}
          />
      </div>
    );
  }
}

//storiesOf('Layouts', module).add('vertical', () => <VerticalLayoutStoryComponent />);

export default App;
