#!/bin/sh
# Запуск локального сервера для перегляду карти
# Використовуй: ./serve.sh 8080
PORT=${1:-8080}
python3 -m http.server "$PORT"
