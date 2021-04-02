import React from "react";
import "./Thread.scss";

const Thread = (props) => {
  const { title, body } = props;

  const handleThumbsUpClick = (e) => {
    console.log("Thumbs up pressed!");
    e.stopPropagation();
  };

  const handleThumbsDownClick = (e) => {
    console.log("Thumbs down pressed!");
    e.stopPropagation();
  };

  const handleCommentsClick = (e) => {
    console.log("Thumbs down pressed!");
    e.stopPropagation();
  };

  const handleClick = () => {
    console.log("bye");
  };

  return (
    <div className="thread" onClick={handleClick}>
      <h1 id="title">
        {props.title}
        <p className="lead">Posted by Reece Louch</p>
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus sed
        elit quis pellentesque. Duis ac nisl ante. Etiam ut accumsan mauris.
        Aliquam viverra odio eu gravida placerat. Curabitur lacinia, nisl non
        rhoncus volutpat, enim mi varius nulla, non pulvinar arcu urna id felis.
        Proin ac viverra nibh, et malesuada lorem. Nulla non ipsum at orci
        aliquam egestas. Nunc at sapien posuere, laoreet turpis sit amet,
        imperdiet ipsum. Aenean at erat non ante ultricies congue sed at libero.
        Donec eget urna ac magna sodales imperdiet. Morbi imperdiet tempus
        nulla, ut eleifend orci maximus nec. Morbi a fringilla lacus. Vestibulum
        varius molestie velit sed gravida. Pellentesque placerat lacus leo,
        faucibus porta sapien dictum et. Fusce ac erat in mauris bibendum
        euismod ut commodo diam. Quisque vehicula sem felis, vitae cursus elit
        congue in. Suspendisse et lacinia leo, sit amet laoreet ipsum. Etiam
        aliquet elit nisi, a sollicitudin ex dignissim a. Pellentesque nibh
        magna, malesuada euismod iaculis a, convallis eu ante. Cras nunc eros,
        tincidunt nec fermentum nec, tempus vel est. Nam feugiat finibus dui,
        sed fringilla metus feugiat in. Aliquam ipsum arcu, luctus id libero ut,
        hendrerit rhoncus justo. Vivamus cursus dui ex, sed pretium augue
        tincidunt vitae. In quis erat orci.
      </p>

      <div id="footer">
        <img
          style={{ width: "30px", height: "30px", margin: "5px" }}
          onClick={handleThumbsUpClick}
          src="/thumbs-up-regular.svg"
        />
        <img
          style={{ width: "30px", height: "30px", margin: "5px" }}
          onClick={handleThumbsDownClick}
          src="/thumbs-down-regular.svg"
        />
        <a style={{ fontSize: "20px", margin: "10px" }}> 8 Likes</a>
        <a
          style={{ fontSize: "20px", margin: "10px" }}
          onClick={handleCommentsClick}
          href="/"
        >
          2 Comments
        </a>
      </div>
    </div>
  );
};

export default Thread;
