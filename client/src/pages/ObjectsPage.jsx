import { useEffect } from "react";
import { useUserStore } from "../store/useUserStore";
import ObjectsTemplate from "../templates/ObjectsTemplate";

const ObjectsPage = () => {
  const { user } = useUserStore();

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <ObjectsTemplate>
      <div className="grid grid-cols-5 p-16 items-start">
        <div className="w-1/5 h-48 bg-red-300 flex justify-center">a</div>
        <div className="w-1/5 h-48 bg-blue-300">b</div>
        <div className="w-1/5 h-48 bg-green-300">c</div>
        <div className="w-1/5 h-48 bg-yellow-200">d</div>
        <div className="w-1/5 h-48 bg-purple-400">a</div>
      </div>
    </ObjectsTemplate>
  );
};

export default ObjectsPage;
