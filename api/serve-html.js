export default function handler(req, res) {
  // Token sederhana buat akses
  const token = req.query.token || req.headers['x-token'];
  if(token !== "YAHAHAH GABISA NYOLONG") {
    return res.status(403).send("Forbidden");
  }

  // Kirim HTML dari folder public
  res.sendFile("index.html", { root: process.cwd() + "/public" });
}
