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

# networking configuration

variable "vpc_cidr" {
    description = "CIDR block for the VPC"
    type = string 
    default = "10.0.0.0/16"
}

# avaibility zones 
variable "avaibility_zone"{
    description = "multiple avaibility zone for high avaibility"
    type = list(string)
    default = ["us-east-1", "us-east-2"]
}

# variable for public subnet cidr 
variable "public_subnet_cidrs"{
    description = "cidr block for public subnet"
    type = list(string)
    default = ["10.0.1.0/24", "10.0.2.0/24"]
}

# cidr for private subnet 
variable "privat_app_subnet_ciders"{
    description = "cidr block for private application subnet"
    type = list(string)
    default = ["10.0.11.0/24", "10.0.12.0/24"]
}

# database private subnet cidr block 

variable "private_db_subnet_cidrs"{
    description = "cidr block for private database subnet"
    type = list(string)
    default = ["10.0.21.0/24"]
}

# enable NAT gateway variable 
variable "enable_nat_gateway"{
    description = "whwrher to create NAT gateways"
    type = bool
    default true
}

variable "single_nat_gateway"{
    description = "use one nat gateway to reduce the costs"
    type = bool
    default = true
}

# ----------- EC2 INSTANCE  ---------------

variable "ec2_instance_type"{
    description = "ec2 instance type for backend application"
    type = string
    default = "t3.micro"
}

variable "ec2_ami_id"{
    description = "AMI ID for backend ec2 aplication"
    type = string
    default = ""
}

variable "asg_min_size"{
    description = "Minimum nuber of EC2 instance"
    type = number
    default = 1
}

variable "asg_desired_capacity"{
    description = "Desired number of ec2 instances"
    type = number 
    default = 1
}

variable "asg_max_size"{
    description = "Maximum number of ec2 instances"
    type = number
    default = 2
}

