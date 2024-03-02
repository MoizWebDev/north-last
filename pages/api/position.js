import positionmodel from '../../Models/position';

export default async function handler(req, res) {
  try {
    // Increase the timeout for the serverless function (in milliseconds), e.g., 60 seconds
    res.setTimeout(60000);

    if (req.method === "POST" && req.body.password === "demopas") {
      console.log("Received POST request");
      console.log("Request Body:", req.body);

      const newNews = await positionmodel.create({
        title: req.body.title,
        location: req.body.location,
        responsibilities: req.body.responsibilities,
        qualifications: req.body.qualifications,
        department: req.body.department,
        summary: req.body.summary
      });

      console.log("New News:", newNews);

      res.status(201).json({ success: true, data: newNews });
    } else {
      console.log("Received GET request");
      const news = await positionmodel.find();
      console.log("Retrieved News:", news);
      res.status(200).json({ success: true, data: news });
    }
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
