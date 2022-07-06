import prettier from "prettier";
export default defineEventHandler(async (event) => {
  const options = {
    semi: false,
    parser: "babel-ts",
    tabWidth: 2,
  };
  const body = await useBody(event);

  const formatted = prettier.format(body.code, options);
  // console.log("body", body);

  return {
    formattedCode: formatted,
  };
});
