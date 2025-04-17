export const loginUser = async (userData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }
  );

  if (!res.ok) throw new Error("Login failed");
  return res.json();
};

export const socialAuth = async (userData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/social`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    }
  );

  if (!res.ok) throw new Error("Login failed");
  return res.json();
};

export const getUserProfile = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/profile`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch user profile");
  return res.json();
};

export const getRefreshToken = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch user profile");
  return res.json();
};

export const createOrder = async (orderData) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/order`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(orderData),
      }
    );

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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/order/my`,
      {
        method: "GET",
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

// Admin
export const getAllOrders = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/order`,
      {
        method: "GET",
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

// Admin
export const updateOrderStatus = async (id, status) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/order/${id}/${status}`,
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/review`, {
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
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/review`,
      {
        method: "GET",
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
// Admin
export const getAllNotifications = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/get-notification`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("getAllNotifications Error:", error);
    throw error;
  }
};

// Admin
export const updateNotification = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/notification/update-notification/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("updateNotification Error:", error);
    throw error;
  }
};


// Admin
export const getAllUsers = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/users`,
      {
        method: "GET",
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
