#install  apline with node 
FROM node:alpine

# To isolate the project files from the default folders
WORKDIR /usr/app
# TO include the files in the folder we use COPY
COPY ./package.json ./  

#install the npm 
RUN npm install
COPY ./ ./  

# run the default commands
CMD ["npm" ,"start"]