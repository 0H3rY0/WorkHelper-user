// import { useEffect } from "react";
import { useUserStore } from "../store/useUserStore";
import ObjectsTemplate from "../templates/ObjectsTemplate";
import { useNavigate } from "react-router";
import { usePermission } from "../store/usePermission";

const ObjectsPage = () => {
  const { user } = useUserStore();
  const { fetchPermissions } = usePermission();

  const navigate = useNavigate();

  const handleSelectObject = async (groupID, objectID, clientID) => {
    try {
      await fetchPermissions(groupID, objectID, clientID);
      navigate(`selected/`);
    } catch (error) {
      console.error("error during selecting object: ", error);
    }
  };

  if (user.userData === undefined || user.userData?.length === 0) {
    return (
      <ObjectsTemplate>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-custom-blue font-bold">
          Brak dostepnych obiektow
        </div>
      </ObjectsTemplate>
    );
  }

  return (
    <ObjectsTemplate>
      <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 content-start  md:p-16 p-4 md:gap-10 gap-4">
        {user.userData?.map((item, index) => (
          <li
            className="bg-custom-blue-light shadow-lg text-white p-6 rounded-sm 
  hover:scale-105 transition-transform cursor-pointer flex flex-col gap-3"
            key={index}
            onClick={() =>
              handleSelectObject(item.grupa_id, item.obiekt_id, item.klient_id)
            }
          >
            <h2 className="text-xl font-bold border-b border-white pb-2">
              {item.obiekt_nazwa || "Brak nazwy"}
            </h2>
            <p className="text-lg">
              <span className="font-semibold">Stanowisko:</span>{" "}
              {item.stanowisko}
            </p>
            <p className="text-lg">
              <span className="font-semibold">Telefon:</span>{" "}
              {item.telefon || "Brak podanego"}
            </p>
          </li>
        ))}
      </ul>
    </ObjectsTemplate>
  );
};

export default ObjectsPage;
