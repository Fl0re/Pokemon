class App{
    constructor(){
        //Pokemon
        this.flag =false;
        this.$form=$("#form");
        this.$eau = $("#eau");
        this.$feu = $("#feu");
        this.$electrik = $("#electrik");
        this.$type = $("#type");
        this.$checkboxes = $("input[type=checkbox]");
        this.$pokemon=$("#pokemon");
        this.$pokattrape=$("#pokattrape");
        this.$Pokedex=$("#Pokedex");
        this.$map=$("#maps");
        this.$info=$("#inf")
        this.map=null;
        this.main = null
        this.pokemons=[];
        this.event = null;
        this.pokeball= null;
            this.spawnInterval=0;
            this.markers=[];
          
            this.pokedex=[];
            this.spawnInterval=0;

        //Evenement
        
             this.$date_debut = $("#date_debut");
             this.$date_fin = $("#date_fin");
             this.initPickers();
    }
    
    //Pokemon
    initMap(){
       
        this.map = new google.maps.Map(document.getElementById('maps'), {
            center: {lat: 42.6990297, lng: 2.8344617},
            zoom: 11,
            scrollwheel: false,
            streetViewControl: false,
            zoomControl: false,
            draggable:false,
            keyboardShortcuts : true
          });
		
		 this.centerOnGeolocation(); //Ici !
         this.main();
    }
    centerOnGeolocation(){
        
        
        var that = this;
        navigator.geolocation.getCurrentPosition(function (position){
              var pos ={
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
              }
              that.map.setCenter(pos);
          })
        }

        displayPokedex(){
            console.log("2")
            var div = document.getElementById("pokemon")
            while(div.firstChild){
                div.removeChild(div.firstChild)
            }
            for(var pokede of this.pokedex ){
            
               this.$pokemon.append(pokede.toHtml());
       
            }
        }

        
   
    filter(dresseur){
    
            var posDresseur =new google.maps.LatLng(dresseur.getPosition().lat(), dresseur.getPosition().lng());
        
            for( var mark of this.markers){
                var distance = google.maps.geometry.spherical.computeDistanceBetween( posDresseur,mark.position);
                console.log(mark, distance, this.event);
                if(distance<8000 && ( this.event == mark.type || this.event == null )  ){
                    mark.marker.setVisible(true);
                }
                else{
                    mark.marker.setVisible(false);
                }
            }
    
        }
    
        initPickers(){
            
                    var options = {
                        dayNames : ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
                        dayNamesMin : ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
                        monthNames : ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"],
                        monthNamesShort : ["Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"],
                        firstDay : 1,
                        minDate : new Date( 2017, 9, 19 ),
                        maxDate : new Date( 2017, 9, 19 ),
                        beforeShowDay : $.proxy(this.closedDay, this), //Pour ne pas perdre le "this" en tant que mon App
                        dateFormat : "dd/mm/yy"
                    };
            
                    this.$date_debut.datepicker( options );
                    this.$date_fin.datepicker( options );
            
                }
        
     
    }