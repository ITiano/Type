export default NEXT_API =
  process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_PRODUCTION_API : process.env.NEXT_PUBLIC_DEVELOPMENT_API;
