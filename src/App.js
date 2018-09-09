import React, { Component } from 'react';
import ReactMde, {ReactMdeTypes} from 'react-mde';
import * as Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';


export interface AppState {mdeState: ReactMdeTypes.MdeState;}

export interface State {mdeState: ReactMdeTypes.MdeState;}

class App extends Component {

    converter: Showdown.Converter;

    constructor(props) {
        super(props);
        this.state = {
            mdeState: {

                markdown: '**Hello world!**',

            },
        };
        this.converter = new Showdown.Converter({
            tables: true,
            simplifiedAutoLink: true,
            strikethrough: true,
            tasklists: true
        });
    }

    handleValueChange = (mdeState: ReactMdeTypes.MdeState) => {
        this.setState({mdeState});
    }

  render() {
    return (
        <div className="container">
          <ReactMde
              onChange={this.handleValueChange}
              editorState={this.state.mdeState}
              generateMarkdownPreview={(markdown) => Promise.resolve(this.converter.makeHtml(markdown))}
          />
      </div>
    );
  }
}

export default App;
