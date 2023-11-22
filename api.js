export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans";
  const res = await fetch(url);

  if (!res.ok) {
    throw {
      message: "Failed to fetch data",
      statusText: res.statusText,
      status: res.status,
    };
  }

  const data = await res.json();

  console.log(data);

  if (id) return data.van;
  return data.vans;
}
