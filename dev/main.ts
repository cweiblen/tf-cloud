import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider, vpc } from "@cdktf/provider-aws";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "aws", {
      region: "us-east-1",
    });  

    new vpc.Vpc(this, 'MyVPC', { 
      cidrBlock: "10.0.0.0/16",
      tags: {
        Name: "MyVPC"
      }
    })
    // myVpc.resetTags()
  }
}

const app = new App();
new MyStack(app, "dev");
app.synth();
