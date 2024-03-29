# FROM openjdk:17-jdk-alpine
# ARG JAR_FILE=target/*.jar
# COPY ./target/tashi-0.0.1-SNAPSHOT.jar /app.jar
# ENTRYPOINT ["java","-jar","/app.jar"]


# The first stage of the build, based on a Maven image
FROM maven:3.8.1-openjdk-11-slim AS build

# Set the current working directory in this stage of the Docker image
WORKDIR /app

# Copy the pom.xml file into the current directory within the Docker image
COPY ./backend/pom.xml .

# This step will only re-run if the pom.xml file changes
RUN mvn dependency:go-offline -B

# Copy the rest of the application code
COPY ./backend/src ./src

# Build the application
RUN mvn package

# The second stage of the build, based on an OpenJDK image
FROM openjdk:17-jdk-alpine

# Copy the JAR file from the first build stage
COPY --from=build /app/target/tashi-0.0.1-SNAPSHOT.jar /app.jar

# Set the startup command
ENTRYPOINT ["java","-jar","/app.jar"]