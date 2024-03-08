<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>


<c:set var="contextPath" value="http://localhost:8080"/>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Create an account</title>
    <link rel="stylesheet" href="${contextPath}/student-form/src/styles.css">
     <script type="text/javascript">
        setTimeout(function() {
            window.location.href = 'http://localhost:4200/home';
        }); // 3000 milliseconds = 3 seconds
    </script>
</head>
<body>
  <div class="container">
    <c:if test="${pageContext.request.userPrincipal.name != null}">
        <form id="logoutForm" method="POST" action="${contextPath}/logout">
            <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
        </form>

        <h2>Welcome ${pageContext.request.userPrincipal.name} | <a onclick="document.forms['logoutForm'].submit()">Logout</a></h2>
    </c:if>
  </div>
  <!-- 
  <div id="angular-app">
   <iframe src="http://localhost:4200/home" width="100%" height="100%"></iframe>
   
  </div> -->

  
  <!-- jQuery and Bootstrap -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
 
</body>
</html>
