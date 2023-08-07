import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Replace with your actual API base URL

export const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000,
  // withCredentials: true,
});

console.log(document.cookie);

// Function to handle API errors
export const handleApiError = (error) => {
  if (error.response) {
    console.log(error);
    throw new Error(error.response.data.error);
  } else {
    console.log(error);
    throw new Error(error.message);
  };
};

// Signup a new user
export const signup = async (email: string, password: string) => {
  try {
    const response = await instance.post(`/signup`, { email, password });
    return response.data;
  } catch (error) {
    handleApiError(error);
  };
};

// Update user password
export const updatePassword = async (oldPassword: string, newPassword: string) => {
  try {
    const response = await instance.post(`/update-password`, { oldPassword, newPassword });
    return response.data;
  } catch (error) {
    handleApiError(error);
  };
};

// Signin an existing user
export const signin = async (email, password) => {
  try {
    const response = await instance.post(`/signin`, { email, password });
    return response.data;
  } catch (error) {
    handleApiError(error);
  };
};

// Get tokens for authenticated user
export const getTokens = async (user) => {
  try {
    const response = await instance.get(`/tokens/${user}`); // TODO { withCredentials: true }
    return response.data;
  } catch (error) {
    handleApiError(error);
  };
};

// Create a new token
export const deployToken = async (user, name, symbol, totalSupply, transactionFee) => {
  try {
    const tokenData = { name, symbol, totalSupply, transactionFee };
    const response = await instance.post(`/tokens/deploy`, { user, tokenData }); // TODO { withCredentials: true }
    return response.data;
  } catch (error) {
    handleApiError(error);
  };
};

export const sendTokens = async (sender: string, receiver: string, amount: number, token: any) => {
  try {
    return await instance.post(`/tokens/transfer`, { user: sender, email: receiver, amount, token })
  } catch (error) {
    handleApiError(error);
  };
}

// Get all tokens
export const getAllTokens = async () => {
  try {
    const response = await instance.get(`/all-tokens`);
    return response.data;
  } catch (error) {
    handleApiError(error);
  };
};

export const sendFeeback = async (feedback) => {
  try {
    console.log(feedback);

    await instance.post('/feedback', feedback)
  } catch (error) {
    handleApiError(error);
  };
};
// // Example usage
// signup('user@example.com', 'password');
// signin('user@example.com', 'password');
// getTokens();
// createToken('New Token', 'NT', 1000, 0.5);
// getAllTokens();
