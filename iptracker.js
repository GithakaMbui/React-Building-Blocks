< !DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" >
    <html xmlns="http://w3.org/1999/xhtml">
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title>Sample Tracking Visitor</title>
            <script type="text/javascript" src="http://l2.io/ip.js?var=myip"></script>
            <script type="text/javascript">
                function tracking_vistors(cid,url,curl,camp,type)
 { var user_agent = getuseragent(); var ip = myip;
                 // how to make this function track visitor ip var publisher = "2000000001";
  //var data = "cid="+cid+"&curl="+curl+"&camp="+camp+"&type="+type+"&url="+url+"&ip="+ip+"&user_agent="+user_agent+"&publisher="+publisher; $.ajax({type: 'POST', url: 'widget/clicktracker.php', data: data }); }
  // </script>
  //</head>
  //<body> </body>
  // </html>