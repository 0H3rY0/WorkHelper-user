export const formatDate = (dateString) => {
  const date = new Date(dateString); // Utwórz obiekt Date z przekazanej daty
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Dodanie wiodącego zera, jeśli miesiąc to np. 3
  const day = date.getDate().toString().padStart(2, "0"); // Dodanie wiodącego zera, jeśli dzień to np. 5

  return `${year}-${month}-${day}`;
};
