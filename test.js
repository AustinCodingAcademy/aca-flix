const url = "https://api.themoviedb.org/3/movie/550?api_key=3e0b415cbac9c0c1dd359cfa7470ca88";

fetch(url)
.then((res) => {
  return res.json();
})
.then((json) => {
  console.log(json);
});
