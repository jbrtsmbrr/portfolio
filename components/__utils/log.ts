
const logger = async (module: string = "Home", description?: string) => {
  const response = await fetch(`${process.env.BASE_URL}/logs`, {
    method: "POST",
    body: JSON.stringify({ module, description }),
    headers: {
      "Content-Type": "application/json"
    }
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