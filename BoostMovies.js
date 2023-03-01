const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7fc49377d8msheb449ffa1261c1ap1acde1jsn263864e44c6e',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};


fetch('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming', options)
	.then(response => response.json())
	.then ((data) => {
		let data1 = ""
		Object.values(data.results).forEach((item) => {
			let src;
			if(item.primaryImage === null){
				src = "https://t3.ftcdn.net/jpg/05/01/98/72/360_F_501987255_kb5LZcBmlcz00IejLlxpklpTbJ9ys5i8.jpg"
			}
			else{
				src = item.primaryImage.url
			}

			data1 += `
			<div class="card">
        <img
          src=${src}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <div class="card-titlediv">
		  <h5 class="card-title">${item.titleText.text}</h5></div>
          <p class="card-text" style="font-size: 0.7rem">
            A Sci-fi artificial intelligence story of a woman who builds an
            intelligent doll that ends up going rogue and turning against its
            owner.
          </p>
          <a href="#" class="btn btn-primary" style="font-size: 0.7rem"
            >Click to watch</a
          >
        </div>
			`
		})
		document.getElementById('card-container').innerHTML = data1


	})
	.catch(err => console.error(err));


	/*
	Object.values(data.results).forEach(arr => {
		//object.values(data) returns the data as an array of objects i.e. [{...},{...},{..}]
		/*
		for (key in arr){
			console.log(arr[key])
		}
		
		console.log(arr);
		*/


	//.then(response => console.log(response))
	//.catch(err => console.error(err));

	/*
	const petNames = (fname, lname) =>{
		console.log(fname);
		console.log(lname);
	}
	
	function petNames (fname, lname){
		console.log(fname);
		console.log(lname);
	}

	const petNames = function(fname, lname){
		console.log(fname);
		console.log(lname);
	}
	*/