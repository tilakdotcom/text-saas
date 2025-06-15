import { google } from "googleapis";
import {
  CLIENT_ID,
  CLIENT_SECRET,
  NODE_ENV,
  REDIRECT_URI,
} from "../common/constants/getEnv";

const oauthGoogle = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  NODE_ENV === "production"
    ? REDIRECT_URI
    : "http://localhost:5000/api/v1/auth/google-login"
);

export default oauthGoogle;
