
const logger = async (module: string = "Home", description?: string) => {
  const response = await fetch("http://localhost:3000/api/logs", {
    method: "POST",
    body: JSON.stringify({ module, description })
  })

  const result = await response.json();

  return result;
  // await connect();
  // Log.create({
  //   module,
  //   description: description ?? "Visited your website"
  // })
}

export default logger;