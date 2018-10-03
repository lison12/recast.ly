import VideoPlayer from "./VideoPlayer.js";
import VideoList from "./VideoList.js";
import exampleVideoData from "../data/exampleVideoData.js";
import Search from "./Search.js";
import YOUTUBE_API_KEY from "../config/youtube.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      videos: exampleVideoData
    };
    // this.getVideo = this.getVideo.bind(this);
  }

  thatClick(video) {
    this.setState({
      currentVideo: video
      // videos: exampleVideoData
    });
  }
  
  getVideo(query) {
    this.props.searchYouTube(
      {max: 5, key: YOUTUBE_API_KEY, query: query}, (data) => {
        this.setState({
          currentVideo: data[0],
          videos: data
        });
      });
  }

  componentDidMount() {
    this.getVideo('elephant');
  }

  render() {
    return(
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            {/*<div><h5><em>search</em> view goes here</h5></div>*/}
            {<Search getVideo={this.getVideo.bind(this)} /> }
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/*<div><h5><em>videoPlayer</em> view goes here</h5></div>*/}
            <VideoPlayer video={this.state.currentVideo} /> 
          </div>
          <div className="col-md-5">
            {/*<div><h5><em>videoList</em> VideoList</h5></div>*/}
            <VideoList videos={this.state.videos} thatClick={this.thatClick.bind(this)} /> 
          </div>
        </div>
      </div>
    );
  }
  
  // var structure = {
  //   kind: 'youtube#searchResult',
  //   etag: '',
  //   id: {
  //     kind: '',
  //     videoId: ''
  //   },
  //   snippet: {
  //     publishedAt: '',
  //     channelId: '',
  //     title: '',
  //     description: '',
  //     thumbnails: {
  //       default: {
  //         url: '',
  //         width: ,
  //         height: 
  //       },
  //       medium: {
  //         url: '',
  //         width: ,
  //         height: 
  //       },
  //       high: {
  //         url: '',
  //         width: ,
  //         height: 
  //       }
  //     },
  //     channelTitle: '',
  //     liveBroadcastContent: ''
  //   }
  // }

}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;
