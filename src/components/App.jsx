class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: window.exampleVideoData,
      currentData: window.exampleVideoData[0]
    };
    this.setData = this.setData.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.props.searchYouTube(null, this.setData);
  }

  handleTitleClick(video) {
    this.setState({
      currentData: video
    });
  }

  setData(videos) {
    console.log(videos);
    this.setState({
      data: videos,
      currentData: videos[0]
    });
  }

  render() {
    return (
        <div>
          <Nav searchHandlerFunction={this.setData}/>
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentData}/>
          </div>
          <div className="col-md-5">
            <VideoList 
            videos={this.state.data} 
            clickHandlerFunction={this.handleTitleClick}/>
          </div>
        </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

