FROM node:7.10.0
RUN cd /root/
RUN git clone https://github.com/grisme/tulasafewalk_front.git
RUN cd /root/tulasafewalk_front
RUN npm install
EXPOSE 8080
CMD [ "npm", "run", "dev" ]
