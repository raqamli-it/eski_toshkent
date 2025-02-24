import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { endpoints } from "../config/endpoints";
import { DataService } from "../config/dataService";
import { RiExternalLinkLine } from "react-icons/ri";
import AshyoListItms from "../Components/AshyoListItms";

export default function ArxAshiyoList() {
  const route = useParams();
  const navigate = useNavigate();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const [apiDatacat, setApiDatacat] = useState();
  const [catID, setCatID] = useState(`archaeologies_type/${route?.id}/items/`);
  const fetchData = async () => {
    const response = await fetch(endpoints.ashyoById(route?.id));
    let resp = await response.json();
    setApiData(resp);
    console.log("bueeeeeee", resp);
  };
  const fetchDataCati = async () => {
    const response = await DataService.get(endpoints.ashyoByIdCat(route?.id));
    setApiDatacat(response);
  };
  useEffect(() => {
    fetchDataCati();
    fetchData();
  }, []);

  return (
    <div className="ashyo_container">
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center h-[50px] mt-6  sm:h-[100px] lg:h-[200px] items-center scale-[0.4] sm:scale-[0.6] md:scale-[0.7] lg:scale-[1]">
          {apiDatacat?.map((cat) => {
            return (
              <div
                className="bg-[white] p-4 max-w-[240px] flex group transition-all ease-linear duration-300 hover:bg-[#0000ffbe] hover:rounded-md flex-col gap-3 items-center"
                key={cat?.id}
              >
                {/* <GiPaintedPottery /> */}
                <img
                  src={cat?.image}
                  alt="surat"
                  className="  h-[70px] w-[70px]"
                />
                <h3 className="text-[15px] w-[160px] group-hover:text-[white] font-bold text-center">
                  {cat.name}
                </h3>
                <Link
                  to="/"
                  className=" items-center p-2 bg-[white] hidden group-hover:flex  rounded-full"
                  onClick={() =>
                    setCatID(
                      `archaeologies_type/${route?.id}/categories/${cat?.id}/items/`
                    )
                  }
                >
                  <RiExternalLinkLine className="text-sm" />
                </Link>
              </div>
            );
          })}
        </div>

        <AshyoListItms id={catID} />
      </div>
    </div>
  );
}
