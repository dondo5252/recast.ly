import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      playerVideo: exampleVideoData[0]
    };
  }

  handleVideoListEntryTitleClick(video) {
    this.setState({
      playerVideo: video
    });

  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playerVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList
              videos= {this.state.videos}
              handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
            />

          </div>
        </div>
      </div>

    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
///
//
// this is our comment to test the repo
// props.exampleVideoData