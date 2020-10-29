const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/StudentDB",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      console.log("Connection Successful");
    } else {
      console.log("Conncetion Failed" + err);
    }
  }
);

require("./student.model");
