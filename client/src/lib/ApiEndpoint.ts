export const registerUserRequest = "/auth/register";
export const loginUserRequest = "/auth/login";
export const logoutUserRequest = "/auth/logout";
export const getUserRequest = "/user";

export const loginWithGoogleRequest = (code: string) =>
  `/auth/google-login?code=${code}`;
export const getSummariesRequest = (page?: string) => `/pdf?page=${page}`;

export const uploadPdfRequest = "/pdf/new";
export const getSummaryByIdRequest = (id: string) => `/pdf/${id}`;
