export const getCities = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/city/getCities`, {
    method: 'GET'
  });
  if (response.status === 200) {
    const data = await response.json();
    return data.cities;
  }
};

export const login = async data => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
  });

  return await response.json();
};

export const authenticate = async (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('FastAidjwt', JSON.stringify(data));
    next();
  }
};

export const isAutheticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('Fastidjwt')) {
    return JSON.parse(localStorage.getItem('Upstorejwt'));
  } else {
    return false;
  }
};

export const getItems = async cityId => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/products/${cityId}`, {
    method: 'GET'
  });
  if (response.status === 200) {
    const data = await response.json();
    return data.products;
  }
};

export const createItem = async (userId, token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/product/create/${userId}`, {
    method: 'POST'
  });
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
};
