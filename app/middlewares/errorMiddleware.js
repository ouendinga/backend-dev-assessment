module.exports = function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: err
  });

  // console.error(err.stack)
  // res.status(500).send('Something broke!')
}