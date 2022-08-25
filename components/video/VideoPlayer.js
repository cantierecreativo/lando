import ReactPlayer from "react-player";

export default function VideoPlayer({ record }) {
  const mp4Url = record.videoInternal.video.mp4Url;
  return (
    <ReactPlayer
      fluid={true}
      playing={true}
      autoPlay={false}
      width="100%"
      height="100%"
      light={record.poster?.responsiveImage.src}
      lightUrl={record.poster?.responsiveImage.src}
      url={mp4Url}
      controls={true}
      className="react-player-custom"
      playIcon={
        <button>
          <div className="triangle"></div>
          <span>Vedi il video</span>
        </button>
      }
    />
  );
}
