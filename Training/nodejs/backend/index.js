var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "newdb"
}); 
 
 
 
con.connect(function(err){
    if(err)
        console.log(err)
    else{
        con.query("SELECT * FROM tblusers",function(err, result){
            if(err)
                console.log(err)
            else{
                console.log(result)
            }
        })
    }
})
