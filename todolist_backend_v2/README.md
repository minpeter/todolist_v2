start db with docker

docker run -p 3306:3306 --name todolist_db -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=todolist -e MYSQL_USER=minpeter -e MYSQL_PASSWORD=1234 -d mysql

