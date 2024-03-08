<c:set var="contextPath" value="localhost:8080"/> 

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Log in with your account</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="text mb-4">Login Here !</h2>
        <div class="login-form">
          <form  method="POST" action="${contextPath}/login">
            <div class="mb-3">
              <label for="Username " class="form-label">Username</label>
              <input type="text" class="form-control" name="username" placeholder="Enter username" required>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" name="password" placeholder="Password" required>
               <span>${error}</span>  <span>${message}</span><span>${validationError}</span>
            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
              
            </div>
            <div class="text">
              <button type="submit" class="btn btn-primary">Login</button>
         
                <small  class="ml-3">Don't Have Any Account? <a href="${contextPath}/registration">Create One</a></small>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
