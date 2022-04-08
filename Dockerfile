FROM dorowu/ubuntu-desktop-lxde-vnc

MAINTAINER Daniel Yanes

# Updating the system
# RUN apt-get update \
#     && apt-get upgrade -y

# Adding binaries to execute
ADD build/bin/ /usr/bin

# Adding the backgrounds to set
ADD build/backgrounds /usr/local/share/mybackgrounds

# Code directory
WORKDIR /root/questions-app

# Copy all code
COPY . .

# Cleaing file not utils
RUN rm -rf /root/questions-app/build