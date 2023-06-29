export default async (values: any) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(values),
    // headers: {
    //   "Content-Type": "application/json",
    //   "Accept": "application/json"
    // }
  })

  return response;
}