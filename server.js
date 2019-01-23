const express = require('express');
const react = require('react');
const reactDOM = require('react-dom/server');
const fs = require('fs')
var css  = fs.readFileSync('./client/dist/css/style.css');
var listingsDBFinder = require('./mongoFinder.js');
var path = require('path');
var serverBundle = require('./client/dist/bundle/serverBundle.js').default;

// Middleware
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname, './client/dist/')));
console.log('CALLED DIRECTORY', __dirname);
// console.log(__dirname + '/../client/dist');
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(req.url)
    next()
})

// Get images by Listing ID #
app.get('/api/pictures/:listingID', (req, res) => {
    let listingID = req.params.listingID;
    console.log(listingID)
    listingsDBFinder(listingID, (data) => {
        if(data){
            let props = {
                pictures: data.images,
                clicked: false,
                clickedImage: "",
                listingID: listingID
            }
            // console.log('THIS IS PROPS: ', props);
            let component = react.createElement(serverBundle, props);
            // console.log('THIS IS COMPONENT:' , component)
            let string = reactDOM.renderToString(component);
            // console.log('STRING: ', string)
            res.send(
            `<!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                    <title>SSRDocument</title>
                    <<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
                    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
                    <style type="text/css">${css}</style>
                    </head>
                    <body>
                    <div id="image-carousel">${string}</div>
                    <script src="/bundle/bundle.js"></script>
                    <script>
                        ReactDOM.hydrate(
                            React.createElement(ImageCarousel, ${JSON.stringify(props)}),
                            document.getElementById('image-carousel')
                        );
                    </script>
                </body>
            </html>`
            );
        } 
    })
});

// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/client/dist/index.html'))
// })

let port = 5050;
app.listen(port, function () {
    console.log(`listening on Port ${port}...`);
});

module.exports = app;
// {/* <script src='/bundle.js'></script>