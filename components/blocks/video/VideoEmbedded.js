import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const VideoEmbedded = (video) => {
  return (
    <ReactPlayer
      fluid={true}
      playing={false}
      autoPlay={false}
      width="100%"
      height="100%"
      url={video.video.url}
      controls={true}
    />
  );
};

export default VideoEmbedded;
