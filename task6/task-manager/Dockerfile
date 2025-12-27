FROM node
#make a folder in the container
WORKDIR /myapp


COPY package*.json ./

RUN npm install 

#copy the modules 
COPY . /myapp

EXPOSE 5173

CMD ["npm","run","exposed-port"]

