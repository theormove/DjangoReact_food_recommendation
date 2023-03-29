FROM python:3.8-slim-buster
ENV PYTHONUNDUFFERED 1
ENV DEBIAN_FRONTEND noninteractive
COPY sshd_config /etc/ssh/
WORKDIR /usr/src/app
COPY . .

RUN pip3 install -r requirements.txt
RUN apt-get update \
    && apt-get install -y --no-install-recommends dialog \
    && apt-get install -y --no-install-recommends openssh-server \
    && echo "root:Docker!" | chpasswd \
    && chmod u+x init_container.sh


EXPOSE 8000 2222

CMD /usr/src/app/init_container.sh 

