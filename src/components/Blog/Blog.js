import React from 'react';
import myImage from './CodeCommit.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Blog= () => {
//   return (
//     <div>
//       {/* <h1>My Blog</h1>

//       <h2>Welcome to my blog Page !</h2>
//       <h3>Why Aws CodeCommit?</h3>
//       <p>AWS CodeCommit is a fully-managed source control service offered by Amazon Web Services (AWS) that can be used as an alternative to GitHub. Some reasons why someone may choose AWS CodeCommit over GitHub are:

// 1. Integration with other AWS services: AWS CodeCommit integrates well with other AWS services such as AWS CodeBuild, AWS CodeDeploy, and AWS CodePipeline, allowing for a streamlined and fully managed CI/CD workflow.

// 2. Security: AWS CodeCommit provides features such as IAM integration and encryption of data in transit and at rest to enhance security.

// 3. Cost: For organizations that already use AWS, there may be cost benefits in using AWS CodeCommit instead of paying for separate GitHub accounts.

// 4. Availability: As an AWS service, CodeCommit benefits from the high availability and durability offered by the AWS infrastructure.

// However, GitHub is a popular platform with a large user base and a wealth of features and plugins. It is also a more mature platform with a longer history and a more established ecosystem. <br/>
// So, choosing between AWS CodeCommit and GitHub may depend on the specific needs and priorities of the organization.</p> */}

//     <a href="https://medium.com/@ghafteab/aws-code-commit-5f5116bb6d60">
         
//     <img src={myImage} alt=" myImage" width="600" height="500"/>

//     </a>
    
//     </div>
//   );
return (
    <div className="container my-5">
      <h1 className="text-center">My Blog</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img src={myImage} className="card-img-top" alt="Blog Image" />
            <div className="card-body">
              <h5 className="card-title">AWS CodeCommit is a fully-managed source control service offered by Amazon Web Services (AWS) that can be used as an alternative to GitHub.<br/> Some reasons why someone may choose AWS CodeCommit over GitHub are:<br/>

1. Integration with other AWS services:- <br/>AWS CodeCommit integrates well with other AWS services such as AWS CodeBuild, AWS CodeDeploy, and AWS CodePipeline, allowing for a streamlined and fully managed CI/CD workflow.<br/>

2. Security: AWS CodeCommit provides features such as IAM integration and encryption of data in transit and at rest to enhance security.<br/>

3.Cost: For organizations that already use AWS, there may be cost benefits in using AWS CodeCommit instead of paying for separate GitHub accounts.<br/>

4. Availability: As an AWS service, CodeCommit benefits from the high availability and durability offered by the AWS infrastructure.<br/>

However, GitHub is a popular platform with a large user base and a wealth of features and plugins. <br/> It is also a more mature platform with a longer history and a more established ecosystem. So, choosing between AWS CodeCommit and GitHub may depend on the specific needs and priorities of the organization.</h5>
              <p className="card-text"></p>
              <a href="https://medium.com/@eudismuhangi" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
        {/* Add more columns for additional blog posts */}
      </div>
    </div>
  );
}

export default Blog;
