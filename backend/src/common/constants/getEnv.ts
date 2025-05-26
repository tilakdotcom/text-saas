const getEnv = (key:string, deFaultValue?:string):string =>{
  const  value = process.env[key] || deFaultValue;
  if(!value){
    throw new Error(`Key ${key} not found in env`);
  }
  return value
}

export const PORT = getEnv("PORT","5000");
export const NODE_ENV = getEnv("NODE_ENV","development");
export const CLIENT_URI = getEnv("CLIENT_URI");


//origin cors
export const CORS_ORIGIN = getEnv("CORS_ORIGIN");


// tokens
export const ACCESS_TOKEN_SECRET = getEnv("ACCESS_TOKEN_SECRET");
export const REFRESH_TOKEN_SECRET = getEnv("REFRESH_TOKEN_SECRET");

// cloudinary
export const CLOUDINARY_API_NAME= getEnv("CLOUDINARY_API_NAME");
export const CLOUDINARY_API_KEY= getEnv("CLOUDINARY_API_KEY");
export const CLOUDINARY_API_SECRET= getEnv("CLOUDINARY_API_SECRET");

//google-Login
export const CLIENT_ID = getEnv("VITE_CLIENT_ID") 
export const PROJECT_ID = getEnv("VITE_PROJECT_ID")
export const AUTH_URI = getEnv("VITE_AUTH_URI")
export const TOKEN_URI = getEnv("VITE_TOKEN_URI")
export const AUTH_PROVIDER = getEnv("VITE_AUTH_PROVIDER")
export const CLIENT_SECRET = getEnv("VITE_CLIENT_SECRET")
export const REDIRECT_URI = getEnv("VITE_REDIRECT_URI")
export const JAVASCRIPT_URI = getEnv("VITE_JAVASCRIPT_URI")







