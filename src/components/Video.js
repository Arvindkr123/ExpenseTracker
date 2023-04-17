import "./Video.css";

function Video({ title, id, channel = "Coder Dost", views, time, verified, children, deleteVideo, eidtVideo }) {
  return (
    <>
      <div className="container">
        <div>
          <button className="close" onClick={()=>deleteVideo(id)}>X</button>
        </div>
        <div>
          <button className="edit" onClick={()=>eidtVideo(id)}>Edit</button>
        </div>
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Katherine Johnson"
          />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel} {verified && "✅"}{" "}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        {children}
      </div>
    </>
  );
}

export default Video;
