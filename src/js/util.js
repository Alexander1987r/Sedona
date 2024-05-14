import '../map/leaflet/dist/leaflet.js'

const navigationList=document.querySelector('.navigation__list');
const navigationButton=document.querySelector('.navigation__button');
const navigationButtonClose=document.querySelector('.navigation__button-close');
const screen=window.matchMedia("(max-width:768px)");

//функция открытия/закрытия бургера
export const getScreenWidth=()=>{
  const openMenu=()=>{
    navigationList.classList.add('navigation__list_open');
  }
  const closeMenu=()=>{
    navigationList.classList.remove('navigation__list_open');
  }

  const changes=(screen)=>{
    if(screen.matches){
      navigationButton.addEventListener('click',openMenu);
      navigationButtonClose.addEventListener('click',closeMenu);
    }else{
      navigationButton.removeEventListener('click',openMenu);
      navigationButtonClose.removeEventListener('click',closeMenu);
    }
  }
  if(matchMedia){
    const screen=window.matchMedia("(max-width:768px)");
    screen.addEventListener('change',changes);
    changes(screen)

  }
}
//функция переключения активной ссылки
 export const getSwitchingActive=()=>{
  navigationList.addEventListener('click',(evt)=>{
    const target=evt.target;
    if((target.tagName === 'A') && (!target.classList.contains('navigation__link_active')) ){
     //найдем активный класс
     const linkActive=navigationList.querySelector('.navigation__link_active');
     //удалим его
     linkActive.classList.remove('navigation__link_active');
     //добавим активный класс клику
     target.classList.add('navigation__link_active');
    }
    console.log('sdf');
  });
}
//функция вывода карты (лефлет)
export const getMap=()=>{
  //подключим карту LeafLeat
  const map=L.map('map').setView({
    lat:34.876513,
    lng:-111.746103,
  },6.5);

  //Воспользуемся open source изображениями карт от OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  //создадим свою метку на карте
  const markerIcon=L.icon({
    iconUrl:'/marker.svg',
    iconSize:[42,42],
    iconAnchor:[20,50],
  });
  const mainPinMarker=L.marker({
    lat:34.876513,
    lng:-111.746103,
  },{
    draggable:true,
    icon:markerIcon,
  });
  //добавим метку
  mainPinMarker.addTo(map);
}