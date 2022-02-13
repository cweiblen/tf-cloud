terraform {
  cloud {
    organization = "ArisGlobal"

    workspaces {
      name = "github-dev"
    }
  }
}

provider "aws" {
  region = var.aws_region
}
