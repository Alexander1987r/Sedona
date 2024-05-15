import '../map/leaflet/dist/leaflet.js';
import '../pristine/pristinejs/dist/pristine.js';
const navigationList=document.querySelector('.navigation__list');
const navigationButton=document.querySelector('.navigation__button');
const navigationButtonClose=document.querySelector('.navigation__button-close');
const screen=window.matchMedia("(max-width:768px)");

const form=document.querySelector('.form');
const body=document.body;
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
    iconUrl:'marker.svg',
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

//функция проверки валидации формы
export const getValidation=()=>{
// активизируем библиотеку Pristine
const pristineLibrary=new Pristine(form,{
  // класс родительского элемента, куда добавляется класс ошибки/успеха
  classTo:'form__label',
  errorClass: 'has-danger',
  successClass: 'has-success',
  // класс родительского элемента, к которому добавляется текстовый элемент ошибки
  errorTextParent: 'form__label',
  // тип элемента, который нужно создать для текста ошибки
  errorTextTag: 'div',

  // класс текстового элемента ошибки
  errorTextClass: 'form__label_error',
});


  //функция успешной отпрвки формы
  const getSuccessMessage=()=>{
   const successTemplate=document.querySelector('#succes').content;
   const popupSuccess=successTemplate.querySelector('.popup');
   const popupSection=popupSuccess.cloneNode(true);
   body.appendChild(popupSection);
   popupSection.addEventListener('click',(evt)=>{
    if(evt.target.closest('.popup__button')){
      popupSection.remove();
    }
   });
  }

  //функция не успешной отпрвки формы
  const getErrorMessage=()=>{
    const successTemplate=document.querySelector('#error').content;
    const popupSuccess=successTemplate.querySelector('.popup');
    const popupSection=popupSuccess.cloneNode(true);
    body.appendChild(popupSection);
    popupSection.addEventListener('click',(evt)=>{
      if(evt.target.closest('.popup__button')){
        popupSection.remove();
      }
     });
  }

  form.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  const isValide=pristineLibrary.validate();

  if(isValide){
    form.reset();
    getSuccessMessage();
  }else{
    getErrorMessage();

  }
  });
  }
