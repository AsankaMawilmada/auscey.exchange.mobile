import "dotenv/config";

export default ({ config }) => ({
  ...config,
  extra: {
    API_URL: process.env.API_URL || "https://api.example.com",
    ENV_NAME: process.env.ENV_NAME || "",
  },
});
