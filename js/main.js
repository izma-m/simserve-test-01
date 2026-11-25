(function(){
  // Path to the Unity export (its index.html). Replace the folder contents with your final build.
  var SIM_URL = 'simulation/index.html';
  var $ = function(id){return document.getElementById(id)};
  var intro=$('intro'), stage=$('stage'), frame=$('frame'), sim=$('sim'),
      loading=$('loading'), site=$('site'), hero=$('top');

  function openSim(){
    loading.classList.remove('hide');
    frame.classList.remove('reel');
    sim.onload=function(){setTimeout(function(){loading.classList.add('hide')},600)};
    sim.src=SIM_URL;
    stage.classList.add('on'); stage.setAttribute('aria-hidden','false');
    document.body.classList.add('locked');
  }
  function revealSite(){
    intro.classList.add('gone');
    site.classList.add('show');
    document.body.classList.remove('locked');
    window.scrollTo(0,0);
    hero.classList.remove('enter'); void hero.offsetWidth; hero.classList.add('enter');
  }
  function exitSim(){
    frame.classList.add('reel');
    setTimeout(function(){
      sim.src='about:blank';
      stage.classList.remove('on'); stage.setAttribute('aria-hidden','true');
      revealSite();
    },900);
  }
  $('enter-radio').addEventListener('click',openSim);
  $('exit').addEventListener('click',exitSim);
  $('again').addEventListener('click',openSim);
  $('nav-play').addEventListener('click',openSim);
  $('skip').addEventListener('click',revealSite);
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape' && stage.classList.contains('on')) exitSim();
  });
})();
