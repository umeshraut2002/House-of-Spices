variable "aws_region" {
    description = "aws deployment region"
    type = string 
    region = "us-east-1"
}

# for envirmonents 

variable "enviroment"{
    description = "enviroment for application deployment"
    type = string 
    default = "dev"

    validation {
        condition = contains(["dev", "staging", "prod"], var.envirmonent)
        error_message = "enviroment must be dev, staging or prod"
    }
}

# project name used for resource naming 

variable "project_name" {
    description = "project name used for resource naming"
    type = string 
    default = "house-of-spices"
}