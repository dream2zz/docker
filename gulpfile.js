const gulp = require('gulp');
const Docker = require('dockerode');
const tar = require('gulp-tar');
const minimist = require('minimist');

gulp.task('copy', function(){
  return gulp.src('Dockerfile').pipe(gulp.dest('./docs/.vuepress/dist'));
});

gulp.task('tar', function() {
  gulp.src('./docs/.vuepress/dist/**')
        .pipe(tar('build.tar'))
        .pipe(gulp.dest('.'));
});

gulp.task('pushImage', function() {
  const knownOptions = {
    string: 'imageVersion',
    default: { imageVersion: process.env.IMAGEVERSION_ENV || 'latest' }
  };
  const options = minimist(process.argv.slice(2), knownOptions);
  var imageName = `172.22.3.5:9001/gsafety/docker-starter:${options.imageVersion}`;
  var auth = {
    username: 'zhanghao',
    password: '123456',
    email: 'admin@example.com',
    serveraddress: 'http://172.22.3.5:9001'
  };
  var docker = new Docker({ host: 'http://172.22.3.101', port: 2375 });

  docker.buildImage('./build.tar', { t: imageName }, function(err, response) {
    if (err) {
      console.log(err);
    }
    response.pipe(process.stdout, {
			end: true,
    });
    response.on('end', function(){
			var image = docker.getImage(imageName);
      console.log(image);
      image.history(function(err,res){
        if(err){
          return console.log(err)
        }
      });

    image.push(
      { tag: options.imageVersion },
      function(err, response) {
        if (err) {
          console.log(err);
        }
        response.pipe(process.stdout, {
          end: true,
        });
        response.on('end', function(){
          image.remove();
        });
      },
      auth
      );
    });
  });
});

gulp.task('sonar', function(callback){
  process.env.SONAR_SCANNER_MIRROR = 'http://nexus.gsafety.com/repository/gs-assets/sonar-scanner/';
  sonarqubeScanner({
    serverUrl: 'http://sonarqube.gsafety.com/',
    token: '198fdd3888c32031e968ad438f2a8b1dfc525df3',
    option: {
      'sonar.projectKey': 'cad-statistics-client',
      'sonar.projectName': 'cad-statistics-client',
      'sonar.source': 'src',
      'sonar.sourceEncoding': 'UTF-8'
    }
  }, callback);
});