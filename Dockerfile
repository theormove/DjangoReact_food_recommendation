FROM python:3.8-slim-buster
ENV PYTHONUNDUFFERED=1
WORKDIR /usr/src/app
COPY . .

RUN pip3 install -r requirements.txt



