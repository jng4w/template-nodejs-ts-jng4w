FROM node:16

RUN apt-get update

RUN apt-get -y install curl
RUN apt-get install sudo

RUN sudo apt-get autoclean

WORKDIR /app  
COPY package.json /app/
COPY src /app/
RUN npm install  
# RUN apt-get install redis-server
# RUN redis-server

CMD ["npm", "start"]