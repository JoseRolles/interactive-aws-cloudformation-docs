# Interactive AWS CloudFormation Docs
A simple JavaScript that can be ran on AWS CloudFormation Documentation to make it more interactive.

The hope is that this is a building block to make an interactive template builder based on the docs.

## To try it out

1. Visit this typical CloudFormation Documentation URL:
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html

2) Open the Developers Tool JavaScript console.

3) Paste the contents of the [test_script_to_paste_into_console.js](https://raw.githubusercontent.com/JoseRolles/interactive-aws-cloudformation-docs/master/test_script_to_paste_into_console.js) file from this repository.

4) Hover over the YAML version of the "Syntax" section.

## A typical CloudFormation Docs web page

![Screenshot of a typical CloudFormation Docs web page](https://raw.githubusercontent.com/JoseRolles/interactive-aws-cloudformation-docs/master/screenshot_original_docs.png "Screenshot of a typical CloudFormation Docs web page")

## The same CloudFormation Docs page using this script

![Screenshot of Demo](https://raw.githubusercontent.com/JoseRolles/interactive-aws-cloudformation-docs/master/screenshot_demo.png "Screenshot of Demo")

## The future

It would be great to have an interactive builder where it looks like this demo. Hover to read about it. Click to make changes to the template. When done, copy/download the finished template.

### Some UX ideas for a future builder
 - Clicking property values that are `Objects` would pull in the YAML syntax for that specific `Object`.
 - Clicking to edit `String` property values will also show a list of suggested or recent [Intrinsic Functions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference.html).
 - When intrinsic functions like `Ref:` are selected, a list of resources and parameters in the working template is listed.
 - When intrinsic functions like `Fn::Sub` are selected, the syntax for them are pulled into that location for editing.
