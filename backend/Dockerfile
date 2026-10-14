# base image 
FROM maven:3.9-eclipse-temurin-21-alpine

WORKDIR /app

COPY pom.xml .

COPY src ./src

RUN mvn clean package -DskipTests
RUN cp target/*.jar target/app.jar

EXPOSE 8080

CMD ["java","-jar", "target/app.jar"]