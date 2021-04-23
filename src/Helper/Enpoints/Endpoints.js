export const getCities = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/city/getCities`,
    {
      method: "GET",
    }
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.cities;
  }
};

const getItems = async (cityId) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/products/${cityId}`,
    {
      method: "GET",
    }
  );
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
};

const createItem = async (userId, token) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/product/create/${userId}`,
    {
      method: "POST",
    }
  );
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
};
