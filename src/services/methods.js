/**
 * METHODS: GET - POST - PUT - DELETE
 */

export const GET = () => {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export const POST = (body) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
};

export const PUT = (body) => {
  return {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
};

export const DELETE = (id) => {
  return {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
};
