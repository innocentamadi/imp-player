let host;

if (process.ENV === 'production') {
  host = "//imp-player.herokuapp.com/api/v1"
} else {
  host = "//localhost:3000/api/v1"
}

module.exports = {
  host
};
