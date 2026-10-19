# Этап 1: сборка проекта Maven
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn package -DskipTests

# Этап 2: лёгкий образ только для запуска
FROM eclipse-temurin:21-jre-alpine
COPY --from=build /app/target/app.jar /app.jar
EXPOSE 8080
CMD ["java", "-Xmx256m", "-jar", "/app.jar"]
