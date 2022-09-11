var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var scroll=new SmoothScroll('a[href*="#"]',{speed:1400,speedAsDuration:true});window.addEventListener('load',function(){setTimeout(function(){var el=document.getElementsByClassName('modalinit')[0];el.className='modal';},200);});function closeModals(){var el=document.getElementsByClassName('modal')[0];el.className='modal hidden';}
window.addEventListener("scroll",onScroll,false);window.addEventListener("resize",onScroll);function onScroll(){var top=this.scrollY;var height=this.innerHeight;var anim=Math.min(Math.max(top/height,0),1)
var header=document.getElementById("header");var preview=document.getElementById("prev");var topHeader=header.getBoundingClientRect().top+header.offsetHeight;var offset=-height*0.3+preview.offsetHeight;var prevO=offset-height*0.8*anim;if(prevO<0){prev.style.marginTop=-offset+"px";}else{prev.style.marginTop=prevO-offset+"px";}
var banners=document.getElementsByClassName("banner");for(var i=0;i<banners.length;i++){var skin=banners[i].getElementsByClassName("block")[0].getElementsByClassName("skin")[0];var animSkin=Math.min(Math.max((skin.getBoundingClientRect().top+skin.offsetHeight)/(height+skin.offsetHeight),0),1);skin.style.backgroundPosition="0px "+100*animSkin+"px";banners[i].style.backgroundPosition="50% "+-500*animSkin+"px";}
var enterscrolls=document.getElementsByClassName("enterscroll");for(var i=0;i<enterscrolls.length;i++){var enterscroll=enterscrolls[i];if(enterscroll.getBoundingClientRect().top<height*0.8){enterscroll.style.transform="translateY(0px)";enterscroll.style.opacity="1";}else{enterscroll.style.transform="";enterscroll.style.opacity="";}}}

}