<%@ page session="false" trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

  <!doctype html>
  <html lang="en">
  <head>
  <meta charset="utf-8">
  <title>WujaSeed</title>
  <base href="/simple-front/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  </head>
  <body>
  <app-root></app-root>
  <script type="text/javascript" src="<c:url value="/inline.bundle.js"/>"></script>
  <script type="text/javascript" src="<c:url value="/polyfills.bundle.js"/>"></script>
  <script type="text/javascript" src="<c:url value="/styles.bundle.js"/>"></script>
  <script type="text/javascript" src="<c:url value="/vendor.bundle.js"/>"></script>
  <script type="text/javascript" src="<c:url value="/main.bundle.js"/>"></script>
  </body>
  </html>
