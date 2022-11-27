const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.firstname;
  const lastName = req.body.lastname;
  const email = req.body.email;




var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };
  const jsonData = JSON.stringify(data);
  const url = "https://us --ur server no from 1 to 22 -- .api.mailchimp.com/3.0/lists/--your list id ---";
  const options = {
    method: "POST",
    auth: "Mr.M:--your api key--",
  };

  const request = https.request(url, options, function (response) {

    if(response.statusCode === 200)
    {
        res.sendFile(__dirname + "/success.html");
    }
    else
    {
        res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });


//   https.request(url, options, function (response) {
//     response.on("data", function (data) {
//       console.log(JSON.parse(data));
//     });
  });

  request.write(jsonData);
  request.end();
    //res.send("hey")
});

app.post("/failure",function(req,res)
{
  res.redirect("/");
});


app.listen(3000, function () {
  console.log("Server is running at port 3000");
});


//05786fdf05c1c790967bf3356d2eeec9-us21

//caaed5bf42. list id

