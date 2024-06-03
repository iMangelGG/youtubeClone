import React, { useEffect, useState } from "react";
import "./PlayVideo.css";

import like from "../../assets/img/like.png";
import dislike from "../../assets/img/dislike.png";
import share from "../../assets/img/share.png";
import save from "../../assets/img/save.png";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const { videoId } = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    // Información del video
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    // Información del canal
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    // Información de los comentarios
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    if (apiData) {
      fetchOtherData();
    }
  }, [apiData]);

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <h3> {apiData ? apiData.snippet.title : "Titulo aca"} </h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "Vistas"}{" "}
          Vistas &bull;
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "Fecha"}
        </p>
        <div>
          <button className="buttons_video">
            <img src={like} alt="" />
            {apiData ? value_converter(apiData.statistics.likeCount) : "Likes"}
          </button>
          <button className="buttons_video">
            <img src={dislike} alt="" />
          </button>
          <button className="buttons_video">
            <img src={share} alt="" /> Share
          </button>
          <button className="buttons_video">
            <img src={save} alt="" /> Save
          </button>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={
            channelData ? channelData.snippet.thumbnails.default.url : "Logo"
          }
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "Nombre del canal"}</p>
          <span>
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : "Cantidad de Subs"}
            Suscriptores
          </span>
        </div>
        <button>Suscribirse</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData ? apiData.snippet.description.slice(0, 250) : "Descripcion"}
        </p>
        <hr />
        <h4>
          {apiData
            ? value_converter(apiData.statistics.commentCount)
            : "Contador de comentarios"}
          Comentarios
        </h4>
        {commentData.map((item, index) => {
          return (
            <div key={index} className="comment">
              <img
                src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
              />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}
                  <span>
                    {moment(
                      item.snippet.topLevelComment.snippet.publishedAt
                    ).fromNow()}
                  </span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                <div className="coment-action">
                  <img src={like} alt="" />
                  <span>
                    {value_converter(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
