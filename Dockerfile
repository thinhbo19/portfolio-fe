# Sử dụng Node.js làm image cơ sở
FROM node:20-alpine

# Đặt thư mục làm việc trong container
WORKDIR /app

# Copy file package.json và package-lock.json
COPY package.json package-lock.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ dự án vào container
COPY . .

# Build ứng dụng (dành cho production)
RUN npm run build

# Khai báo port ứng dụng chạy
EXPOSE 3000 

# Lệnh mặc định khi container khởi động
CMD ["npm", "run", "start"]
