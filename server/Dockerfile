# เลือก Base Image ที่จะใช้ (Node.js 14)
FROM node:18

# กำหนด Working Directory
WORKDIR /usr/src/app

# Copy package.json และ package-lock.json เข้าไปใน Container
COPY package*.json ./

# ติดตั้ง dependencies ด้วย npm
RUN npm 

RUN npm run build

# Copy โค้ดทั้งหมดเข้าไปใน Container
COPY . .

# กำหนดคำสั่งที่จะใช้ในการเริ่มต้นแอปพลิเคชันด้วย Nodemon
CMD ["npx", "nodemon", "app.js"]
