export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "Missing URL parameter" });

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Bad response");
    const data = await response.text();
    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch RSS feed" });
  }
}
