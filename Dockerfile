FROM dorowu/ubuntu-desktop-lxde-vnc

MAINTAINER Daniel Yanes

# Updating the system
# RUN apt-get update \
#     && apt-get upgrade -y

# Adding binary to execute
ADD build/bin/questions-app /usr/bin

# Code directory
WORKDIR /root/questions-app

# Copy all code
COPY . .

# Cleaing file not utils
RUN cd /root/questions-app \
    && rm -rf build