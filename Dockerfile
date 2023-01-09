FROM python:3.8-slim-buster
ENV PYTHONUNDUFFERED=1
WORKDIR /django
COPY . .

RUN pip3 install -r requirements.txt

CMD ["python3", "manage.py","runserver", "0.0.0.0:8000"]


