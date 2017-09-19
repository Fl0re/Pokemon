class Pokemon{
    
   constructor(icon, title, position, type){
        this.icon = icon;
        this.title = title;
        this.position = position;
        this.type = type;
        this.marker = false;
        this.$dom;
        this.life=2;
        this.display()
      
        
   }
    
   display(){        

       var icon = this.icon;
        var title = this.title;
        var position = this.position;
        var type =this.type;
       this.marker = new google.maps.Marker({
            position: position,
            map: app.map,
            title: title,
            icon: icon,
            animation: google.maps.Animation.DROP,
            visible: false
        });
    }

    toHtml(){
        
        var html ="";
        html += "<section  class='pokedex'>"
        html += "<div>"
        html += "<h2 class='title'>"+this.title+"</h2>"
        html += "<img src='"+this.icon+"' />"
        html += "</div>"
        html += "</section>"
        return html;
    }

  
    
  
}

