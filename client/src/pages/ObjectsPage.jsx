// import { useEffect } from "react";
import { useUserStore } from "../store/useUserStore";
import ObjectsTemplate from "../templates/ObjectsTemplate";
import { useNavigate } from "react-router";
import { usePermission } from "../store/usePermission";

const ObjectsPage = () => {
  const { user } = useUserStore();
  const { fetchPermissions } = usePermission();

  const navigate = useNavigate();

  const handleSelectObject = async (groupID) => {
    console.log(groupID);
    try {
      await fetchPermissions(groupID);
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
      <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  p-16 items-start gap-10">
        {user.userData?.map((item, index) => (
          <li
            className="bg-custom-blue-light shadow-xl text-white p-6 hover:scale-115 scale-transition cursor-pointer"
            key={index}
            onClick={() => handleSelectObject(item.grupa_id)}
          >
            <h2 className="mb-5">Nazwa: {item.obiekt_nazwa || "Brak nazwy"}</h2>
            <p>Stanowisko: {item.stanowisko}</p>
            <p>Telefon: {item.telefon || "brak podanego"}</p>
          </li>
        ))}
      </ul>
    </ObjectsTemplate>
  );
};

export default ObjectsPage;
