# Gunakan base image yang sesuai dengan kebutuhan aplikasi React
FROM node:14-alpine

# Set working directory di dalam kontainer
WORKDIR /app

# Salin file package.json dan package-lock.json (jika ada)
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin kode aplikasi ke dalam kontainer
COPY . .

# Build aplikasi React
RUN npm run build

# Stage kedua, menggunakan base image yang lebih ringan
FROM nginx:alpine

# Salin hasil build dari stage pertama ke dalam direktori default Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Port yang akan diexpose oleh kontainer
EXPOSE 80

# Perintah untuk menjalankan Nginx ketika kontainer dijalankan
CMD ["nginx", "-g", "daemon off;"]