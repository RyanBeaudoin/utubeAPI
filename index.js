'use strict'

const apiKey = {
  youtube: "AIzaSyDjWNOQEuzjtZAxzO_1e_PQjsGH8kThPOk"
}

function getVideoUrl(input) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${input}&key=${apiKey.youtube}`;
  console.log(url);
  fetch(url)
    .then(response=>response.json())
    .then(res => displayResult(res))
    .catch(err=> {$('.js-error-message').text(`${err.message}`);
  });
}

function displayResult(res) {
  const vidUrl = `<iframe width="420" height="315"
  src="https://www.youtube.com/embed/${res.items[0].id.videoId}"></iframe>`;
  console.log(vidUrl);
  $('#results').empty();
  $('#results').append(`${vidUrl}`);
  $('#results').removeClass("hidden");
}

function watchForm() {
  $('.js-search-form').submit(e=>{
    e.preventDefault();
    const input = $('.js-query-video').val();
    getVideoUrl(input);
    console.log(input);
  })
}

$(watchForm);