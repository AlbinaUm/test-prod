# Используем официальный образ Node.js
FROM node:20 as BUILD

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в контейнер
COPY . .

RUN npm run build  # Make sure `tsc` is running here

# Открываем порт 8000 для API
EXPOSE 8000

# Запускаем приложение
CMD ["npm", "start"]
