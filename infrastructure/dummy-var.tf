
# ==========================================
# PROJECT CONFIGURATION
# ==========================================

variable "aws_region" {
  description = "AWS region for infrastructure deployment"
  type        = string
  default     = "ap-south-1"
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "dev"

  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be dev, staging, or prod."
  }
}

variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
  default     = "house-of-spices"
}

# ==========================================
# NETWORK CONFIGURATION
# ==========================================

variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "availability_zones" {
  description = "Availability zones for high availability"
  type        = list(string)
  default     = ["ap-south-1a", "ap-south-1b"]
}

variable "public_subnet_cidrs" {
  description = "CIDR blocks for public subnets"
  type        = list(string)
  default     = ["10.0.1.0/24", "10.0.2.0/24"]
}

variable "private_app_subnet_cidrs" {
  description = "CIDR blocks for private application subnets"
  type        = list(string)
  default     = ["10.0.11.0/24", "10.0.12.0/24"]
}

variable "private_db_subnet_cidrs" {
  description = "CIDR blocks for private database subnets"
  type        = list(string)
  default     = ["10.0.21.0/24", "10.0.22.0/24"]
}

variable "enable_nat_gateway" {
  description = "Whether to create NAT gateways"
  type        = bool
  default     = true
}

variable "single_nat_gateway" {
  description = "Use one NAT gateway to reduce development costs"
  type        = bool
  default     = true
}

# ==========================================
# EC2 CONFIGURATION
# ==========================================

variable "ec2_instance_type" {
  description = "EC2 instance type for backend application"
  type        = string
  default     = "t3.micro"
}

variable "ec2_ami_id" {
  description = "AMI ID for backend EC2 instances"
  type        = string
  default     = ""
}

variable "asg_min_size" {
  description = "Minimum number of EC2 instances"
  type        = number
  default     = 1
}

variable "asg_desired_capacity" {
  description = "Desired number of EC2 instances"
  type        = number
  default     = 1
}

variable "asg_max_size" {
  description = "Maximum number of EC2 instances"
  type        = number
  default     = 2
}

# ==========================================
# APPLICATION CONFIGURATION
# ==========================================

variable "backend_port" {
  description = "Backend application listening port"
  type        = number
  default     = 8080
}

variable "health_check_path" {
  description = "Backend health check endpoint"
  type        = string
  default     = "/actuator/health"
}

variable "frontend_build_directory" {
  description = "Frontend production build directory"
  type        = string
  default     = "../../frontend/dist"
}

# ==========================================
# DATABASE CONFIGURATION
# ==========================================

variable "db_engine" {
  description = "Database engine"
  type        = string
  default     = "mysql"
}

variable "db_engine_version" {
  description = "RDS MySQL engine version"
  type        = string
  default     = "8.0"
}

variable "db_instance_class" {
  description = "RDS instance class"
  type        = string
  default     = "db.t3.micro"
}

variable "db_name" {
  description = "Application database name"
  type        = string
  default     = "masalewala"
}

variable "db_username" {
  description = "RDS master username"
  type        = string
  default     = "dbadmin"
}

variable "db_allocated_storage" {
  description = "Initial RDS storage in GB"
  type        = number
  default     = 20
}

variable "db_max_allocated_storage" {
  description = "Maximum autoscaled RDS storage in GB"
  type        = number
  default     = 100
}

variable "db_multi_az" {
  description = "Enable RDS Multi-AZ deployment"
  type        = bool
  default     = false
}

# ==========================================
# DOMAIN AND SSL CONFIGURATION
# ==========================================

variable "domain_name" {
  description = "Root application domain name"
  type        = string
  default     = ""
}

variable "frontend_subdomain" {
  description = "Frontend subdomain"
  type        = string
  default     = "www"
}

variable "backend_subdomain" {
  description = "Backend API subdomain"
  type        = string
  default     = "api"
}

# ==========================================
# SECURITY CONFIGURATION
# ==========================================

variable "enable_waf" {
  description = "Enable AWS WAF protection"
  type        = bool
  default     = true
}

variable "enable_rds_encryption" {
  description = "Enable RDS storage encryption"
  type        = bool
  default     = true
}

variable "enable_deletion_protection" {
  description = "Enable RDS deletion protection"
  type        = bool
  default     = false
}

# ==========================================
# MONITORING CONFIGURATION
# ==========================================

variable "enable_cloudwatch_alarms" {
  description = "Enable CloudWatch monitoring alarms"
  type        = bool
  default     = true
}

variable "cpu_high_threshold" {
  description = "CPU utilization threshold for scaling and alarms"
  type        = number
  default     = 70
}

variable "log_retention_days" {
  description = "CloudWatch log retention period"
  type        = number
  default     = 7
}
