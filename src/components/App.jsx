class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: window.exampleVideoData,
      currentData: window.exampleVideoData[0]
    };
    this.handleTitleClick = this.handleTitleClick.bind(this);
  }

  handleTitleClick(video) {
    this.setState({
      currentData: video
    });
  }

  render() {
    return (
        <div>
          <Nav />
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentData}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.data} clickHandlerFunction={this.handleTitleClick}/>
          </div>
        </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

