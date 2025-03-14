# Используем официальный образ Node.js
FROM node:20 AS BUILD

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Пересобираем bcrypt для текущей архитектуры
RUN npm rebuild bcrypt

# Копируем все файлы проекта в контейнер
COPY . .

# Собираем приложение с использованием TypeScript
RUN npm run build

# Открываем порт 8000 для API
EXPOSE 8000

# Запускаем приложение в режиме продакшн
CMD ["npm", "start"]
