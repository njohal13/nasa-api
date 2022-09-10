// When button is clicked run the getNASA fxn
document.querySelector('button').addEventListener('click', getNASA)

function getNASA(){
  const choice = document.querySelector('input').value // choose the date and add it to the url as &date='+choice
  const url = 'https://api.nasa.gov/planetary/apod?api_key=qoxYELSWWJbrZ9LcCXNdhf3Vzpam4VmhTySuKujR&date='+choice
  //this api has an api key that limits number of requests users make
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
        }
        else if( data.media_type === 'video') {
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation
        
       
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

