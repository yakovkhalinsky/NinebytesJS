<%@ page import="com.google.gson.JsonObject" %>
<%

String arg1 = ""; try { arg1 = request.getParameter("arg1").trim(); } catch (Exception ex) { arg1 = ""; }
long arg2 = -1; try { arg2 = Integer.parseInt(request.getParameter("arg2")); } catch (Exception ex) { arg2 = -1; }

JsonObject o = new JsonObject();

o.addProperty("arg1", arg1);
o.addProperty("arg2", arg2);

%>
<%=o.toString()%>