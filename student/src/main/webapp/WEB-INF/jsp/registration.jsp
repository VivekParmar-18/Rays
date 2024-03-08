<!-- <c:set var="contextPath" value="localhost:8080"/>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Register for an account</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="text mb-4">Register Here !</h2>
        <div class="login-form">	
          <form  method="POST" >
            <div class="mb-3">
              <label for="Username " class="form-label">Username</label>
              <input type="text" class="form-control" name="username" placeholder="Enter username" required>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" name="password" placeholder="Password" required>
              <label for="password" class="form-label">Confirm Password</label>
              <input type="password" class="form-control" name="passwordConfirm" placeholder="Password" required>
               <span id="passwordError">${error}</span>
            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
              
            </div>
            <div class="text">
              <button type="submit" class="btn btn-primary" onclick="return validateForm()">Register</button>
                <small  class="ml-3">Already Have an Account? <a href="${contextPath}/login">Login</a></small>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <script>
   function validateForm() {
	   var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var confirmPassword = document.getElementById("passwordConfirm").value;
      if (password !== confirmPassword) {
        document.getElementById("passwordError").innerHTML = "Passwords do not match";
        return false;
      }
      if (password.length <4 ) {
          document.getElementById("passwordError").innerHTML = "Passwords too short";
          return false;
        } 
      if (password.length >15 ) {
          document.getElementById("passwordError").innerHTML = "Passwords too long";
          return false;
        }
      if (username.length <3 ) {
          document.getElementById("passwordError").innerHTML = "username too short";
          return false;
        } 
      if (username.length >10 ) {
          document.getElementById("passwordError").innerHTML = "username too long";
          return false;
        }
      else {
        document.getElementById("passwordError").innerHTML = "";
        return true;
      }
    }
  </script>
</body>
</html>-->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Register for an account</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="text mb-4">Register Here!</h2>
        <div class="login-form">  
          <form method="POST" modelAttribute="userForm">
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input type="text" id="username" class="form-control" name="username" placeholder="Enter username" required>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" id="password" class="form-control" name="password" placeholder="Password" required>
            </div>
            <div class="mb-3">
              <label for="passwordConfirm" class="form-label">Confirm Password</label>
              <input type="password" id="passwordConfirm" class="form-control" name="passwordConfirm" placeholder="Password" required>
              
              <span id="passwordError">${error}</span>
            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
            </div>
            <div class="text">
              <button type="submit" class="btn btn-primary" onclick="return validateForm()">Register</button>
              <small class="ml-3">Already Have an Account? <a href="${contextPath}/login">Login</a></small>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <script>
    function validateForm() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var confirmPassword = document.getElementById("passwordConfirm").value;

 
      // Validate password match
      if (password !== confirmPassword) {
        document.getElementById("passwordError").innerHTML = "Passwords do not match";
        return false;
      }

      // Clear error message if all validations pass
      document.getElementById("passwordError").innerHTML = "";
      return true;
    }
  </script>
</body>
</html>

