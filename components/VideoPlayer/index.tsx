export const VideoPlayer = function VideoPlayer() {
  return (
    <div className="
      fixed
      inset-0
      z-0
      overflow-hidden
      transition-opacity
      duration-1000
    ">
      <video
        className="
          max-w-full
          w-full
          h-full
          m-0
          leading-none
          border-0
          align-baseline
          object-cover
        "
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src="/visuals_higher_quality.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};
