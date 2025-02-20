const AppropriateTime = ({ appropriateDate, handleDateFilter }) => {
  return (
    <div className="flex items-center justify-end gap-4">
      <p className="text-custom-blue font-semibold">Aktualne: </p>
      <input
        type="radio"
        name="group1"
        id="radio1"
        value={"current"}
        checked={appropriateDate === "current"}
        onChange={handleDateFilter}
        className="accent-custom-blue"
      />
      <p className="text-custom-blue font-semibold">Usuniete: </p>
      <input
        type="radio"
        name="group1"
        id="radio2"
        value={"removed"}
        checked={appropriateDate === "removed"}
        onChange={handleDateFilter}
        className="accent-custom-blue"
      />
      <p className="text-custom-blue font-semibold">Wszystkie: </p>
      <input
        type="radio"
        name="group1"
        id="radio3"
        value={"every"}
        checked={appropriateDate === "every"}
        onChange={handleDateFilter}
        className="accent-custom-blue"
      />
    </div>
  );
};

export default AppropriateTime;
