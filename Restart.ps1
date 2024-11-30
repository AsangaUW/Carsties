docker compose down  
docker volume list
docker volume rm carsties_mongodata
docker volume rm carsties_pgdata
docker volume prune -f
docker volume list
docker compose up -d