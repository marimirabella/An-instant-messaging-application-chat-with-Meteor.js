FROM ubuntu:16.04

MAINTAINER foneox@gmail.com

RUN mkdir /home/meteorapp

WORKDIR /home/meteorapp

ADD . ./meteorapp

RUN apt-get update -q && apt-get clean

RUN apt-get install -y curl

RUN curl https://install.meteor.com/ | sh

RUN cd /home/meteorapp/meteorapp && meteor build ../build --directory --allow-superuser

RUN cd /home/meteorapp/build/bundle \
  && bash -c 'curl "https://nodejs.org/dist/$(<.node_version.txt)/node-$(<.node_version.txt)-linux-x64.tar.gz" > /home/meteorapp/build/required-node-linux-x64.tar.gz' \
  && cd /usr/local && tar --strip-components 1 -xzf /home/meteorapp/build/required-node-linux-x64.tar.gz \
  && rm /home/meteorapp/build/required-node-linux-x64.tar.gz

RUN cd /home/meteorapp/build/bundle/programs/server && npm install

RUN rm /usr/local/bin/meteor
RUN  rm -rf ~/.meteor
RUN apt-get --purge autoremove -y curl

RUN npm install -g forever

EXPOSE 80
ENV PORT 80

CMD ["forever", "--minUptime", "1000", "--spinSleepTime", "1000", "build/bundle/main.js"]
