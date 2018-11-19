String.prototype.replaceAll = function(de, para){
    var str = this;
    var pos = str.indexOf(de);
    while (pos > -1){
		str = str.replace(de, para);
		pos = str.indexOf(de);
	}
    return (str);
}

 function tagToken (){
    return ( Math.random().toString(36).substr(2)) + ( Math.random().toString(36).substr(2))
 }

class  PopUp {
    
    static show( $rootScope ,  titulo , erro ) {
 
         if ( typeof erro === "string" )  {
             $rootScope.popup( { title : titulo , msg : erro })

        } else {
  
            let text = new String( erro[0].message )

            text = text.replaceAll('400 - ','')
    
            let arrayMsg = JSON.parse( text )
            let msgs = []
            arrayMsg.erro.forEach(element => {
                msgs.push( element.message )
            });
    
            text = text.replaceAll('_',' ')
            $rootScope.popup( { title : titulo , msg : msgs })

        }
        
        
      
    }
}
