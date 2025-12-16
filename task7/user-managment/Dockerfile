FROM node:20-alpine
#make a folder in the container
WORKDIR /myapp

COPY package*.json .

RUN npm install 

#copy the modules 
COPY . .

#npm run build for production 
RUN npm run build

RUN npm install -g serve

EXPOSE 5173


#CMD ["npm","run","exposed-port"]
CMD ["serve","-n", "-l", "5173", "-s", "dist"]

