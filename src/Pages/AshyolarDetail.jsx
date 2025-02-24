import React, { useEffect, useState } from "react";

import dateFormat from "dateformat";
import { FaTelegramPlane } from "react-icons/fa";

import PageTitle from "../Components/PageTittle";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";
import { useParams } from "react-router-dom";

export default function AshyolarDetail() {
  const { id } = useParams();

  const [apiData, setApiData] = useState([]);

  const IdData = apiData.find((data) => data.id == id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoints.ashyoById(route?.id));
        setApiData(response);
        console.log(response, "bu bububububububu");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  function convertToEmbedLink(link) {
    const videoId = link?.split("v=")[1];
    console.log(videoId);
    if (videoId != undefined) {
      const embedLink = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      return embedLink;
    } else return `${link}?autoplay=1`;
  }

  console.log(IdData, "wwww");
  return (
    <>
      <div className="bg-[white] py-6 px-4">
        <PageTitle title={apiData?.title_uz} />
        <div className="detail_container_ashyo">
          <div className="detail_img_ashyo">
            <img src={IdData?.image} />
          </div>

          <div className="detail_title_ashyo">
            {/* <h1 className="my-4">{apiData?.title_uz}</h1> */}

            <div className="detail_describtion_ashyo text-wrap">
              <p
                className="text-detail1"
                dangerouslySetInnerHTML={{ __html: apiData?.context_uz }}
              ></p>
            </div>
          </div>
          <div className="share-ashyo">
            <div>
              <a target="_blank" className="span-ashyo"></a>
              {/* <div className="sp-ic-jd">

                <FaTelegramPlane />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
