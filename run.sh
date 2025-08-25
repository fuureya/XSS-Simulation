#docker compose up -d

docker compose -f web/vulnweb/docker-compose.yml up -d --build

docker compose -f web/attacker/docker-compose.yml up -d --build
