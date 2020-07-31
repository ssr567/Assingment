import React from "react";

function Clip(props) {
  return (
    <div>
      <video key={props.id} autoPlay>
        <source src={props.url} />
      </video>
    </div>
  );
}

export default Clip;
