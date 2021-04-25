import React, { useState } from "react";
import { HandThumbsUp, HandThumbsDown } from "react-bootstrap-icons";
import { likeFn, dislikeFn } from "../../Helper/Enpoints/Endpoints";

const Item = ({
  name,
  id,
  companyName,
  city,
  contactNumber,
  stock,
  address,
  user,
  category,
  likes,
  dislikes,
}) => {
  const [like, setLike] = useState(+likes || 0);
  const [dislike, setDislike] = useState(+dislikes || 0);

  console.log(user);
  return (
    <div style={{ zIndex: "0" }} className="col-md col-md-6">
      <div
        style={{
          borderColor: user ? "#198754" : "#0099ff",
          overflow: "hidden",
        }}
        className="card shadow rounded input-group p-2 px-3 my-2 card-special"
      >
        <div className="mb-0 d-flex justify-content-between align-items-center">
          <div className="h4 my-0 text-success">{category?.name || name}</div>
          <div className="my-0">
            <button
              onClick={async () => {
                const response = await likeFn(id);
                response && setLike((like) => like + 1);
              }}
              id={id}
              type="button"
              className="btn btn-success me-3"
            >
              <HandThumbsUp /> {like}
            </button>
            <button
              onClick={async () => {
                const response = await dislikeFn(id);
                response && setDislike((dislike) => dislike + 1);
              }}
              id={id}
              type="button"
              className="btn btn-danger"
            >
              <HandThumbsDown /> {dislike}
            </button>
          </div>
        </div>
        <div className="text-muted mb-0">{companyName || ""}</div>
        <div className="mb-0 lead">
          <strong>{city.name}</strong>
        </div>
        <div className="mb-0 d-inline-block text-truncate">{address || ""}</div>
        <div className="mb-0 text-truncate">
          Contact Information: {contactNumber || ""}
        </div>
        <div className="mb-0 text-success lead">
          <strong>{stock ? `${stock} Available` : ""}</strong>
        </div>
      </div>
    </div>
  );
};

export default Item;
