FROM ulexus/meteor:v1.4

ADD . /src

WORKDIR /src

RUN npm install
