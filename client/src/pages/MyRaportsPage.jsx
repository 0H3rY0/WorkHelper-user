import RaportsList from "../components/RaportsList";
import BackButton from "../components/ui/BackButton";

const MyRaportsPage = () => {
  return (
    <div className="w-full flex flex-col items-start md:p-14 p-3">
      <div className="w-full flex justify-between items-center mb-14">
        <h2 className="text-2xl font-bold text-custom-blue">Moje Zgłoszenia</h2>
        <BackButton path="/selected" />
      </div>

      <RaportsList />
    </div>
  );
};

export default MyRaportsPage;
