module.exports = {
 
  apps : [

     {
      watch  : false,
      name   : 'emprestimo-web',
      script    : 'app.js',
      instances : "max",
      exec_mode : "cluster",
  
      env: {
          NODE_ENV: 'development',
          PORT: 8080,
          HOST_APP: 'http://localhost',  
          NODE_PROJECT: 'emprestimo-web',
           
      }
     }

 
  ]

  
};
