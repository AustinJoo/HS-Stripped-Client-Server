const express = require('express');
const react = require('react');
const reactDOM = require('react-dom/server');
// const fs = require('fs')
// var css  = fs.readFileSync('./client/dist/css/style.css');
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

// Get images by Listing ID #
app.get('/api/pictures/:listingID', (req, res) => {
    let listingID = req.params.listingID;
    console.log(listingID)
    listingsDBFinder(listingID, (data) => {
        if(data){
            // console.log(data);
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
            let css = `
            body {
                margin: 0px;
                padding: 0px;
                /* background-color: #484848; */
                font-family: Circular, "Helvetica Neue", Helvetica, Arial, sans-serif !important;
                font-size: 14;
                color: white;
                width: 100%;
              }
              
              img {
                width: 320px;
                height: 320px;
                max-width: 460%;
                max-height: 460%;
              }
              
              /* .white {
                background-color: white;
              } */
              
              .carouselImages {
                display: inline-block;
                height: 50px;
                width: 1450px;
                color: white;
              }
              
              .current-pic {
                height: 60%;
                width: 60%;
                display: block;
                margin-left: auto;
                margin-right: auto;
                border-bottom: 30px solid #484848;
              }
              
              .button {
                position: absolute;
                display: block;
                height: 200px;
                width: 200px;
                background-color: transparent;
                border: none;
                color: black;
              }
              
              .image-slide {
                display: flex;
                text-align: center;
                padding-top: 40px;
                height: 460px;
                background-color: #484848;  
              }
              
              .image-slide > .current-pic {
                  height: auto;
              }
              
              .arrow-left {
                position: absolute;
                margin: auto;
                display: inline-block;
                top: 50%;
                left: 21px;
                color: white;
              }
              
              .arrow-right {
                position: absolute;
                top: 50%;
                right: 21px;
                color: white;
              }
              
              .image-ul {
                width: 100%;
                height: 50%;
                /* margin-left: 10px;
                margin-right: 10px; */
                /* text-align: center; */
                list-style-type: none;
                list-style: none;
                padding-inline-start: 0px;
                background-color: #484848;
                /* margin-block-start: 0; */
                /* margin-block-end: 0; */
                overflow: hidden;
              }
              
              .image-li {
                display: inline-block;
                width: 100px;
                height: 67px;
                background-color: #484848;
                margin-right: 5px;
                /* overflow: hidden; */
              }
              
              .image-li-images {
                height: 100%;
                width: 100%;
                overflow: hidden;
                background-color: #484848;
              }
              
              .bottom-part {
                box-sizing: border-box;
                display: block;
                max-width: 100% !important;
                margin-left: auto !important;
                margin-right: auto !important;
                overflow: hidden !important;
                background-color: #484848 !important;
              }
              
              .bar {
                box-sizing: border-box;
                display: block;
                width: 70%;
                padding-left: 10px;
              }
              
              .caption {
                box-sizing: border-box;
                display: table-cell;
                text-align: left;
                
              }
              
              .footer {
                position: absolute; bottom: 0px; 
                height: 400px;
                width: 100%;
                z-index: -1;
                background-color: #484848 !important;
              }
              
              .div-button {
                transform: translate(700px, 0px) !important; 
                display: table-cell;
                text-align: right;
              }
              
              .show-button {
                background-color: transparent;
                color: white;
                border: none;
              }
              
              @media (max-width: 5000px) {
                .wrapper {
                  display: grid;
                  background-color:black;
                  grid-template-columns: repeat(4, 1fr);
                  grid-template-rows: repeat(2, 230px);
                  overflow: hidden;
                  /* object-fit: cover; */
                  grid-gap: 2.5px;
                  grid-template-areas:
                    "image-a image-d image-c image-c "
                    "image-b image-e image-c image-c";
                }
                .wrapper > img {
                  height: 100%;
                  width: 100%;
                  /* overflow: hidden; */
                  /* object-fit: cover; */
                }
                .wrapper > .a {
                  grid-area: image-a;
                  /* overflow: hidden; */
                }
                .a:hover {
                  transform: scale(1.1);
                  /* overflow: hidden; */
                }
                
                .b #1{
                  grid-area: image-b;
                }
                .b:hover {
                  transform: scale(1.1);
                }
                
                .c #2{
                  grid-area: image-c;
                }
                .c:hover {
                  transform: scale(1.1);
                }
                .d #3{
                  grid-area: image-d;
                }
                .d:hover {
                  transform: scale(1.1);
                }
                .e {
                  grid-area: image-e;
                }
                .e:hover {
                  transform: scale(1.1);
                }
              }
              
              @media (max-width: 900px) {
                .wrapper {
                  grid-template-columns: repeat(3, 1fr);
                  grid-template-rows: repeat(2, 1fr);
                  background-color: #484848;
                  grid-template-areas:
                    "image-a image-c image-c"
                    "image-b image-c image-c";
                  overflow: hidden !important;
                }
                .wrapper > img {
                  height: auto;
                  padding: 20px;
                  overflow: hidden !important;
                }
                .a #0{
                  grid-area: image-a;
                }
                .b #1{
                  grid-area: image-b;
                }
                .c #2{
                  grid-area: image-d;
                }
                .d #3{
                  display: none;
                }
                .e #4{
                  display: none;
                }
              }
              
              @media (max-width: 500px) {
                .wrapper {
                  grid-template-columns: 1fr;
                  grid-template-rows: 1fr;
                  background-color: #484848;
                  grid-template-areas: "image-c";
                }
                .wrapper > img {
                  height: auto;
                }
                .a #0{
                  display: none;
                }
                .b #1{
                  display: none;
                }
                .c #2{
                  grid-area: image-c;
                }
                .d #3{
                  display: none;
                }
                .e #4{
                  display: none;
                }
              }
              `
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