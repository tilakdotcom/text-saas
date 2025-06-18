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
  "postmessage"
);

export default oauthGoogle;
