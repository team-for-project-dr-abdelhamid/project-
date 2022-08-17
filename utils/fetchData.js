const baseUrl = process.env.BASE_URL;

export const getData = async (url, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: "GET",
    headers: [
      { Authorization: token },
      { key: "Access-Control-Allow-Credentials", value: "true" },
      {
        key: "Access-Control-Allow-Origin",
        value: "https://hotch-potch.herokuapp.com",
      },
      {
        key: "Access-Control-Allow-Methods",
        value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
      },
      {
        key: "Access-Control-Allow-Headers",
        value:
          "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
      },
    ],
  });

  const data = await res.json();
  return data;
};

export const postData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(post),
  });

  const data = await res.json();
  return data;
};

export const putData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(post),
  });

  const data = await res.json();
  return data;
};

export const patchData = async (url, post, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(post),
  });

  const data = await res.json();
  return data;
};

export const deleteData = async (url, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  const data = await res.json();
  return data;
};
