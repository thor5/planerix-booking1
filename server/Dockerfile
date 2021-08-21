FROM python:3.6.12-slim

ENV APP_HOME=/app
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR $APP_HOME

COPY requirements.txt $APP_HOME/requirements.txt

RUN python -m pip install --upgrade pip setuptools wheel
RUN pip install -r requirements.txt

COPY ./ $APP_HOME
