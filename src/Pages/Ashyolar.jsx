import React, { useEffect, useState } from "react";
import PageTitle from "../Components/PageTittle";
import { Link, useNavigate } from "react-router-dom";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";

export default function Ashyolar() {
  const navigate = useNavigate();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      // const response = await DataService.get(endpoints.ashyo);
      const response = await DataService.get(endpoints.ashyo);
      setApiData(response);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="ashyo_container">
      <PageTitle title={"Ashyolar"} />
      <div className="full_card_container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apiData?.map((ashyo, index) => {
            return (
              <div
                className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer"
                key={index}
                onClick={() => navigate(`/arxeplogyaAshyolari/${ashyo.id}`)}
              >
                <img
                  src={ashyo.image}
                  alt={ashyo.image}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-black bg-opacity-50  text-white p-4 rounded-b-lg">
                  <h1 className="text-2xl font-semibold">{ashyo.title}</h1>
                  <p
                    className="mt-2"
                    dangerouslySetInnerHTML={{ __html: ashyo.context_uz }}
                  ></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
