# The first stage of the build, based on a Maven image
# FROM maven:3.9.3-openjdk-17-slim AS build

FROM maven:3.9.3-openjdk-17-slim AS build

# Set the current working directory in this stage of the Docker image
WORKDIR /app

# Copy the entire project into the current directory within the Docker image
COPY . .

# This step will only re-run if the pom.xml file changes
RUN mvn -f ./backend/pom.xml dependency:go-offline -B

# Build the application
RUN mvn -f ./backend/pom.xml package

# The second stage of the build, based on an OpenJDK image
FROM openjdk:17-jdk-alpine

# Copy the JAR file from the first build stage
COPY --from=build /app/backend/target/tashi-0.0.1-SNAPSHOT.jar /app.jar

# Set the startup command
ENTRYPOINT ["java","-jar","/app.jar"]