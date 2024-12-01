docker compose down  

docker volume list
docker volume rm carsties_mongodata
docker volume rm carsties_pgdata
docker volume prune -f
docker volume list

docker rmi asangauw/auction-svc
docker rmi asangauw/search-svc
docker rmi asangauw/identity-svc
docker rmi asangauw/gateway-svc

docker buildx rm Carsties/src/AuctionService
docker buildx rm Carsties/src/SearchService
docker buildx rm Carsties/src/IdentityService
docker buildx rm Carsties/src/GatewayService

docker builder prune -a -f
docker buildx prune -f
# docker system prune -f

docker compose up -d