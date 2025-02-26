const useInputChange = (setState) => {
  const InputChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return { InputChange };
};

export default useInputChange;
