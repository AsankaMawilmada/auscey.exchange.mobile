import "dotenv/config";

export default ({ config }) => ({
  ...config,
  extra: {
    eas: {
      projectId: "ee6749d1-4061-4f9f-84a1-fb7f42e04cd7",
    },
    API_URL: process.env.API_URL || "https://api.example.com",
    ENV_NAME: process.env.ENV_NAME || "",
  },
});
