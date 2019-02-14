# PeachiairBNB Image Carousel Server
This repo holds the information for a single component of a listing page for a replica site modeled around popular hospitality service airbnb.com. The component itself is full-stack application with a web server that relays information between a client and RESTful API capable of interacting with a separate database. 

This component renders an image carousel that, based on an input ID ranging from 0 to 9,999,999, will render a corresponding batch of predefined images (stored in a MongoDB) to the client application. The focal point of this project was to redesign the backend of an existing application and both optimize and scale the application to function at productino grade levels. A proxy server connects this component with those created by a team of developers to integrate all the parts together and render a complete listing page to the client app.

There are 2 ways of setting up and running this service to run on a deployed service instance; one requires the use Docker and the other does not. The steps for each are listed below.

## Optimizations
- Utilized a Redis cache to store documents returned from the database based on listing ID for 60 seconds.
  - Results: 
    - Efficiency increased by 30% 
    - Errors decreased by 55%
- Designed service to return an array of stringified objects to the proxy to utilize server side rendering.

## Setup (No Docker)
- **Dependencies**
  - React for front-end
  - Node and Express framework for web
  - MongoDB and Mongoose ODM for database connection
  - Redis for caching
- **Setup steps**
 1) Create a service to run instance
    - Ubuntu 18.04 recommended 
 2) Allow traffic on ports 22 (SSH) and 80 (HTTP)
 3) Create SSH connection  
 4) Install [Node](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04) and [Git](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-18-04)
 5) Run command "git clone https://github.com/PeachiairBNB/HS-Stripped-Client-Server.git"  
 7) Run command "sudo npm install"
 8) Run command "npm run concurrently"
 9) Service should be up and running!
- **Notes**:
  - The proxy this component is connected to utilizes server side rendering. Thus, in order to retrieve a proper component from the database, contact the web server directly by adding the endpoint "/api/pictures/[listing ID]"

## Setup (Docker)
- **Setup steps**
 1) Create a service to run instance
    - Ubuntu 18.04 recommended
 2) Allows traffic to ports 22 (SSH) and 80 (HTTP)
 3) Create SSH connection
 4) Install and configure [Node](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04) and [Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04)
 5) Run command "sudo docker login" and login
 6) Run command "sudo docker pull austinjoo/sdc-server-final"
 7) Run command "sudo docker run -p 80:5050 -d austinjoo/sdc-server-final"
 8) Service should be up and running!
- **Notes**:
  - Running the commands "sudo docker ps" will tell you all images running. The port 80 must be free to use this image. Running the command "sudo docker container stop [CONTAINER ID]" will stop the current image and free up port 80
 
## The Team 
**Developers**
- [Justin Poser](https://github.com/CodeNoob25) 
  - [Booking](https://github.com/PeachiairBNB/jp-extracted-server-code)
- [Alexa Marshall](https://github.com/aLeX-c-m) 
  - [Reviews](https://github.com/aLeX-c-m/PL-module)

**Technical Mentor**
- [Trenton Going](https://github.com/trentgoing)
