export const loginUser = async (userData) => {
  const res = await fetch("http://localhost:3500/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!res.ok) throw new Error("Login failed");
  return res.json();
};

export const socialAuth = async (userData) => {
  const res = await fetch("http://localhost:3500/auth/social", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!res.ok) throw new Error("Login failed");
  return res.json();
};

export const getUserProfile = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:3500/users/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch user profile");
  return res.json();
};

export const getRefreshToken = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:3500/auth/refresh", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch user profile");
  return res.json();
};

export const createOrder = async (orderData) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch("http://localhost:3500/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(orderData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Order Creation Error:", error);
    throw error;
  }
};

export const getMyOrdersApi = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch("http://localhost:3500/order/my", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Order Creation Error:", error);
    throw error;
  }
};

// Admin
export const getAllOrders = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch("http://localhost:3500/order", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Order Creation Error:", error);
    throw error;
  }
};

// Admin
export const updateOrderStatus = async (id, status) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `http://localhost:3500/order/${id}/${status}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Order Creation Error:", error);
    throw error;
  }
};

export const addComment = async (comment) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`http://localhost:3500/review`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ comment }), // ✅ send as JSON object
  });

  if (!res.ok) throw new Error("Add comment error");
  return res.json();
};

// Admin
export const getAllReviews = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch("http://localhost:3500/review", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Order Creation Error:", error);
    throw error;
  }
};

