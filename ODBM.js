let input;
let feild_selector;
let token;
$(document).ready(()=>{
	$('.btn').click(()=>{
		feild_selector = $( "#myselect option:selected" ).text();

		input = $('#searchbox').val();
		if(input == ''){
			alert('Please enter movie name to show details')
		}
		else{
			if(feild_selector == 'By Title'){
				token = 't='+input;
			}
			if (feild_selector == 'By Id') {
				token = 'i='+input;
			}
			if (feild_selector == 'By Year') {
				token = 'y='+input;
			}
			
			getoutput();
		}
	});

});
 let getoutput = ()=>{
 	 $.ajax({
        type: 'GET',
        dataType: 'json',
        async: true,
        url: 'http://www.omdbapi.com/?'+token+'&apikey=1dd65742',
        success: (response) => {
            console.log(response);

            if(response.Error=="Movie not found!"){
                 alert('movie not found');}
                 else{
                 	$('.output').show();
                 	if(response.Poster=="N/A"){
               

                 $('#poster').attr("src","dummy.png" );
            }
            else{
                 $('#poster').attr("src", response.Poster);
            }
                 	$('#year').html('Year:  '+response.Year);
                 	$('#rated').html('Rated:  '+response.Rated);
                 	$('#language').html('language:  '+response.Language);
                 	$('#IMDB id').html('IMDB id:  '+response.imdbID);
                 	$('#title').html('<h6>'+'Title:  '+'</h6>'+response.Title);
                 	$('#release-date').html('Released:  '+response.Released);
                 	$('#genre').html('Genre:  '+response.Genre);
                 	$('#runtime').html('Runtime:  '+response.Runtime);
                 	$('#director').html('Director:  '+response.Director);
                 	$('#writers').html('Writer:  '+response.Writer);
                 	$('#actors').html('Actors:  '+response.Actors);
                 	$('#plot').html('<h6>'+response.Plot+'</h6>');
                 	$('#metascore').html('Metascore:  '+response.Metascore);
                 	$('#imdbRating').html('imdbRating:  '+response.imdbRating);
                 	$('#imdbVotes').html('imdbVotes:  '+response.imdbVotes);
                 	$('#collections').html('BoxOffice:  '+response.BoxOffice);
                 }}

                 });
 }
