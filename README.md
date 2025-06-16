G-Scores

link backend: https://gscores.ddns.net/
link frontend: https://g-scores-gamma.vercel.app/

Công nghệ sử dụng:
Backend: Ruby On Rails
Frontend: ReactJS
Giao thức: Rest API

Deployment:
Backend: Digital Ocean + NoIP cho tên miền https
Frontend: Vercel

Hướng dẫn cài đặt:
Anh/Chị chạy các câu lệnh sau khi đã clone projects:
cd G-Scores
docker-compose up -d
sau khi anh/chị chạy xong vui lòng đợi thêm khoảng 20/25 phút đặng project nạp dữ liệu từ file csv ạ!!
anh/chị có thể gõ câu lệnh sau để theo dõi tiếng trình ạ:
docker-compose logs -f

Project này có gì?
tra cứu điểm thí sinh qua số báo danh
xem thống kê với biểu đồ cột chồng
xem top 10 thí sinh khối A đạt điểm cao nhất
Responsive design, Deployment on Linux
