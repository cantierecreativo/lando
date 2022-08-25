import ReactPlayer from "react-player";

export default function VideoPlayer({ record, video }) {
  return (
    <ReactPlayer
      fluid={true}
      playing={false}
      autoPlay={false}
      width="100%"
      height="100%"
      url={video.url}
      controls={true}
      className="react-player-custom"
    />
  );
}
