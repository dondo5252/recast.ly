import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => (

  <div className="video-list">
    {props.videos.map((video, index) =>
      <VideoListEntry key={index} video= {video}/>
    )}
  </div>
  // used index as key https://reactjs.org/docs/lists-and-keys.html#keys

);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

//Refactor the VideoList component to dynamically render one VideoListEntry component for each video object in exampleVideoData