# Используем официальный образ Node.js
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./
COPY postinstall.js ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект в контейнер
COPY . .

# Строим приложение (если это React, Vue и т.д.)
RUN npm run build

# Используем nginx для сервировки статики
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Открываем порт 80 для фронтенда
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
