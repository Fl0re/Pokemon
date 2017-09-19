var app= new App();
// Pokemon
app.main = function(){
  
    var pokemon = new Pokemon();
            app.pokedex=[];
            app.centerOnGeolocation();
            

            
            var southWest = new google.maps.LatLng(42.804157, 2.990673);
            var northEast = new google.maps.LatLng(42.576283, 2.755497);
            var lngSpan = northEast.lng() - southWest.lng();
            var latSpan = northEast.lat() - southWest.lat();
            var position = new google.maps.LatLng(42.6990297, 2.8344617);
            var dresseuricon="Pokemon/trainer.png";
            var dresseur = new google.maps.Marker({
                position: position,
                map: app.map,
                draggable:true,
                title:"Red",
                visible: true,
                optimized: false,
                zIndex: 1,
                icon : dresseuricon
            });

            var icon1 = 'Pokemon/pikachu.png';
            var title1 = 'Pika';
            var type1='Electrik';
            var pos1 = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
            southWest.lng() + lngSpan * Math.random());
            var Pika = new Pokemon(icon1, title1, pos1, type1);

            var icon2 = 'Pokemon/bulbasaur.png';
            var title2 = 'Bulbizare';
            var type2='Plante';
            var pos2 = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
            southWest.lng() + lngSpan * Math.random());
            var bulbizar = new Pokemon(icon2, title2, pos2, type2);


            var icon3 = 'Pokemon/raichu.png';
            var title3 = 'Raichu';
            var type3='Electrik';
            var pos3 = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
            southWest.lng() + lngSpan * Math.random());
            var Raichu = new Pokemon(icon3, title3, pos3,type3);

            var icon4 = 'Pokemon/abra.png';
            var title4 = 'abra';
            var type4='Feu';
            var pos4 = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
            southWest.lng() + lngSpan * Math.random());
            var abra = new Pokemon(icon4, title4, pos4, type4);

            var icon5 = 'Pokemon/magikarp.png';
            var title5 = 'magikarp';
            var type5='Eau';
            var pos5 = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
            southWest.lng() + lngSpan * Math.random());
            var magikarp = new Pokemon(icon5, title5, pos5, type5);

            var icon6 = 'Pokemon/ponyta.png';
            var title6 = 'ponyta';
            var type6='Feu';
            var pos6 = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
            southWest.lng() + lngSpan * Math.random());
            var ponyta = new Pokemon(icon6, title6, pos6, type6);

            var icon7 = 'Pokemon/tentacool.png';
            var title7 = 'tentacool';
            var type7='Eau';
            var pos7 = new google.maps.LatLng(southWest.lat() + latSpan * Math.random(),
            southWest.lng() + lngSpan * Math.random());
            var tentacool = new Pokemon(icon7, title7, pos7, type7);

            


            app.markers.push(bulbizar, Pika, Raichu, abra, ponyta, tentacool, magikarp);

            google.maps.event.addListener(dresseur, 'dragend', function(evt){
                app.filter(dresseur);
            })
            var pokestop = new Pokestop();

            
            google.maps.event.addListener(abra.marker, 'click', function(evt) {
                
                var pokestop = new Pokestop();
                pokestop.pokeball --;
                $("#div").text("Pokeball :" + pokestop.pokeball);
                abra.marker.setIcon("Pokemon/pokeball.png");
                alert('Abra capturé et une pokeball en moins!');
                app.pokedex.push(abra);
                
            });

            google.maps.event.addListener(magikarp.marker, 'click', function(evt) {
                var pokestop = new Pokestop();
                pokestop.pokeball --;
                $("#div").text("Pokeball :" + pokestop.pokeball);
                magikarp.marker.setIcon("Pokemon/pokeball.png");
                alert('magikarp capturé  une pokeball en moins !');
                app.pokedex.push(magikarp);
                
            });

            google.maps.event.addListener(ponyta.marker, 'click', function(evt) {
                var pokestop = new Pokestop();
                pokestop.pokeball --;
                $("#div").text("Pokeball :" + pokestop.pokeball);
                ponyta.marker.setIcon("Pokemon/pokeball.png");
                alert('ponyta capturé  une pokeball en moins !');
                app.pokedex.push(ponyta);
                
            });

            google.maps.event.addListener(tentacool.marker, 'click', function(evt) {
                var pokestop = new Pokestop();
                pokestop.pokeball --;
                $("#div").text("Pokeball :" + pokestop.pokeball);
                tentacool.marker.setIcon("Pokemon/pokeball.png");
                alert('tentacool capturé  une pokeball en moins!');
                app.pokedex.push(tentacool);
                
            });

            google.maps.event.addListener(bulbizar.marker, 'click', function(evt) {
                var pokestop = new Pokestop();
                pokestop.pokeball --;
                $("#div").text("Pokeball :" + pokestop.pokeball);
                bulbizar.marker.setIcon("Pokemon/pokeball.png");
                alert('Bulbizare capturé  une pokeball en moins !');
                app.pokedex.push(bulbizar);
                
            });

            google.maps.event.addListener(Pika.marker, 'click', function(evt) {
                var pokestop = new Pokestop();
                pokestop.pokeball --;
                $("#div").text("Pokeball :" + pokestop.pokeball);
                Pika.marker.setIcon("Pokemon/pokeball.png");
                alert('Pikachu capturé  une pokeball en moins !');
                app.pokedex.push(Pika);
           
                
            });

            google.maps.event.addListener(Raichu.marker, 'click', function(evt) {
                var pokestop = new Pokestop();
                pokestop.pokeball --;
                $("#div").text("Pokeball :" + pokestop.pokeball);
                Raichu.marker.setIcon("Pokemon/pokeball.png");
                alert('Raichu capturé  une pokeball en moins!');
                app.pokedex.push(Raichu);

               
               
            });

            $(document).on("click", "#poke", function(){
                app.$Pokedex.show();
                app.displayPokedex()
               

            })
            $(document).on("click", "#pokeb", function(){
                app.$Pokedex.hide();
            
            })      

            
                app.$form.submit(function( event ){
                    var date_debut = app.$date_debut.val();
                    var date_fin = app.$date_fin.val();
                    event.preventDefault();
                    app.event = app.$type.val();
                    app.filter(dresseur);
            
                });
                var pokestop= new Pokestop();
                $(document).on("click","#pokestoop", function(){
                    
                    pokestop.pokeball++;
                    $("#div").text("Pokeball :" + pokestop.pokeball);
                  
                    })
                    var pokestop= new Pokestop();
                    $("#div").text("Pokeball :" + pokestop.pokeball);
                }

// Evenement



app.$date_fin.change(function(){

    var dateSelectedStart = app.$date_debut.datepicker( "getDate" );
    var dateSelectedEnd = app.$date_fin.datepicker( "getDate" );

    console.log( dateSelectedStart, dateSelectedEnd );

  
    

});



