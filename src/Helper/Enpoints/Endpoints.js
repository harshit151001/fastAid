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

export const login = async (data) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};

export const authenticate = async (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("FastAidjwt", JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("FastAidjwt")) {
    return JSON.parse(localStorage.getItem("FastAidjwt"));
  } else {
    return false;
  }
};

export const signout = async (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("FastAidjwt");
    next();
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/signout`, {
        method: "GET",
      });
      return console.log(response);
    } catch (err) {
      return console.log(err);
    }
  }
};

export const getItems = async (page, cityId) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/products/${cityId}?page=${page}`,
    {
      method: "GET",
    }
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.products;
  }
};

export const getItemsFromQuery = async (page, cityId, searchQuery) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/search/products/${cityId}?page=${page}&&search=${searchQuery}`,
    {
      method: "GET",
    }
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.products;
  }
};

export const createItem = async (userId, token) => {
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

export const getItemsForUser = async (userId, token) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/products/user/${userId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.products;
  }
};

export const deleteItem = async (userId, productId, token) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/products/${productId}/${userId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.products;
  }
};
