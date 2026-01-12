export default async function handler(req, res) {
  try {
    const response = await fetch("https://zucom.free.nf/api/fetch.php");
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: "Proxy fetch failed", details: err.message });
  }
}
