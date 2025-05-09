export default function handler(req, res) {
  const { name } = req.query;

  if (req.method === 'GET' && name) {
    res.status(200).json({ greeting: `Hello, ${name}!` });
  } else {
    res.status(400).json({ error: 'Name is required' });
  }
}