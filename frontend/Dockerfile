# Используем официальный образ Node.js для сборки
FROM node:20 as build

WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json ./
COPY postinstall.js ./
RUN npm install

# Копируем остальные файлы и собираем проект
COPY . .
RUN npm run build

# Используем официальный образ NGINX для публикации
FROM nginx:alpine

# Копируем собранный фронтенд в NGINX
COPY --from=build /app/build /usr/share/nginx/html

# Экспонируем порт для фронтенда
EXPOSE 5173

# Запускаем NGINX
CMD ["nginx", "-g", "daemon off;"]
