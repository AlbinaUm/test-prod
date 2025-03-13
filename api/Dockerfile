FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Строим проект (если нужно)
RUN npm run build

# Открываем порт
EXPOSE 8000

# Запускаем сервер
CMD ["npx", "ts-node", "index.ts"]
