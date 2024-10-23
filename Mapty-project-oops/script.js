
const month = [
  "January","February","March","April","May","June","July","August","September","October","November","December"
];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const rowToggle = document.querySelector('.form__row');



class Workout{
  constructor(coord,distance,duration){
    
    this.coord = coord; //[lat, lan]
    this.distance = distance; // km
    this.duration = duration; // min

  }

}

// new Workout()

class Running extends Workout{
  constructor(coord,distance,duration,cadence){
    super(coord,distance,duration);
    this.cadence = cadence;
    this.calPace()
  }
calPace(){
  // min/km
  this.pace = this.duration / this.distance;
  return this.pace;
}
}

class Cycling extends Workout{
  constructor(coord,distance,duration,elevationGain){
    super(coord,distance,duration);
    this.elevationGain = elevationGain;
    this.calSpeed();
  }

calSpeed(){
  // km/h
  this.speed = this.distance / this.duration
}

}

class App {
 #mapE;
 #map;
 #type
 #date;
 #workouts = [];

  constructor(){

    this.#date = month[(new Date()).getMonth()] + " " + new Date().getFullYear();
    this.#type  = inputType.value;
    this._getPosition();

    inputType.addEventListener('change',this._toggleElevationField.bind(this))

    form.addEventListener('submit',this._newWorkout.bind(this))

    

  }


  _getPosition(){
    if(navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),function(){
      console.log("geolaoction not found")})
      }

  _loadMap(position){

    const {latitude, longitude} =  position.coords;
    const coords = [latitude, longitude];
    console.log(latitude,longitude)


    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.#map);
  
    this.#map.on('click',this._showForm.bind(this))
  }

  _showForm(mapE){
    this.#mapE = mapE
    form.classList.remove('hidden')
  }

  // change elevation to cadence vice-verca
  _toggleElevationField(){
    
    this.#type = inputType.value

    console.log(this.#type)
    
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
  
  }

//  Create new workout

  _newWorkout(e){
    const validation = (...inputs)=>inputs.every(input=>Number.isFinite(input))
    const allPositive = (...inputs)=>inputs.every(input=>input>0)
    e.preventDefault();
    this.#type = inputType.value;
    const distance = +inputDistance.value;
    const cadence = +inputCadence.value;
    const duration = +inputDuration.value;
    const elevation = +inputElevation.value;
    const {lat,lng} = this.#mapE.latlng;

    

    if(this.#type === 'running'){
      // Inputs validation
      if(!validation(distance,duration,cadence) || !allPositive(distance,duration,cadence) ){
        return alert('Input have to positive Numbers')}

        const workout = new Running([lat,lng],distance,duration,cadence)
        this.#workouts.push(workout)
      
      }

    e
    if(this.#type === 'cycling'){
      // Inputs validation
      if(!validation(distance,duration,elevation)|| !allPositive(distance,duration,duration)){
        return alert('Input have to positive Numbers')}
        const workout = new Cycling([lat,lng],distance,duration,elevation)
        this.#workouts.push(workout)
        
      }
    const html = `
    <li class="workout workout--${this.#type}" data-id="1234567890">
      <h2 class="workout__title">${this.#type.slice().split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')} on ${this.#date}</h2>
      <div class="workout__details">
        <span class="workout__icon">${(this.#type === 'cycling') ? '🚴‍♀️' : '🏃‍♂️'}</span>
        <span class="workout__value">${distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${duration}</span>
        <span class="workout__unit">min</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${(duration / distance).toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">${(this.#type === 'cycling' )? '⛰' : '🦶🏼'}</span>
        <span class="workout__value">${(this.#type === 'cycling' )? elevation : cadence }</span>
        <span class="workout__unit">${(this.#type === 'cycling' )? 'm' : 'spm'}</span>
      </div>
    </li> 
  `

    inputDistance.value = inputCadence.value = inputDuration.value = inputElevation.value ="";
    form.classList.add('hidden')

  
    
    form.insertAdjacentHTML('afterend', html);

   

    L.marker([lat, lng]).addTo(this.#map)
    .bindPopup(L.popup({
      maxWidth:250,
      minWidth:100,
      autoClose : false,
      className:`${this.#type}-popup`,
      closeOnClick :false
  }))
    .setPopupContent(`${this.#type}`)
    .openPopup();
  
  }




  }

const app = new App()


      
    





