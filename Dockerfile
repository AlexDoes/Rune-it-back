
FROM maven:3.8.3-openjdk-17-slim AS build

WORKDIR /app

COPY . .

RUN mvn -f ./backend/pom.xml dependency:go-offline -B

RUN mvn -f ./backend/pom.xml package

FROM openjdk:17-jdk-alpine

COPY --from=build /app/backend/target/tashi-0.0.1-SNAPSHOT.jar /app.jar
RUN --mount=type=secret,id=keys ,dst=/etc/secrets/keys cat /etc/secrets/keys
# RUN --mount=type=secret,id=_env,dst=/etc/secrets/.env cat /etc/secrets/.env
ENTRYPOINT ["java","-jar","/app.jar"]