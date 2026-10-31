resource "aws_s3_bucket" "my-bucket" {
    bucket = "hpuse-of-spices-frontend-bucket"
    tags = {
        name = "hpuse-of-spices-bucket"
    }

}