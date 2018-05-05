
const PORT = 3000
var express = require ('express');
var formidable = require ('express-formidable');
var fs = require ('fs');

var app = express ();

/*app.get ("/", 
          function (req, res)
          {
            res.send ('Hello, World!');
          });

app.get ("/yay", 
          function (req, res)
          {
            res.send ('YAY! Node Girls!');
          });
app.get ("/choc", 
          function (req, res)
          {
            res.send ('Mmm chocolate :0!');
          }app.use (express.static ('public')));
*/
app.use (express.static ('public'));

app.use (formidable());

app.post ('/create-post', 
            function (req, res)
            {
              console.log ('/create-post');
              console.log (req.fields);
              
              fs.readFile (__dirname + '/data/posts.json', 
              function (error, file)
              {

                /* Convert file to JSON object */
                var parsedFile = JSON.parse (file);
                console.log (file.toString ());
                parsedFile[Date.now ()] = req.fields.blogpost;
                /* JSON to string */
                fs.writeFile (__dirname + '/data/posts.json', JSON.stringify (parsedFile),
                function (error/*, file*/)
                {
                  console.log (error);
                  res.sendFile (__dirname + '/data/posts.json'); 
                });  
              });
            });

// app.get ("/get-posts", 
//           function (req, res)
//           {
//             res.send (posts.JSON);
//           });

app.listen (PORT, 
            function ()
            {
              console.log ('Server is listening on port ' + PORT + '.');
              console.log ('Ready to accept requests!');
            });