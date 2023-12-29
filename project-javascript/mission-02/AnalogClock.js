const AnalogClock = $container => {
  createTimeDiv($container);
  createHandDiv($container);
};


// create time div

function createTimeDiv(clock) {
  for (let i = 1; i < 13; i++) {
    const newDiv = document.createElement('div');
    styleTimeContainer(newDiv);
    newDiv.classList.add('time', `time${i}`);
    const newTime = document.createElement('div');
    styleTimeElement(newTime);
    newDiv.appendChild(newTime);
    clock.appendChild(newDiv);
  }
}

function styleTimeContainer(timeContainer) {
  timeContainer.style.display = 'flex';
  timeContainer.style.flexDirection = 'column';
  timeContainer.style.alignItems = 'center';
}

function styleTimeElement(timeElement) {
  timeElement.style.width = '2px';
  timeElement.style.height = '20px';
  timeElement.style.marginTop = '5px';
  timeElement.style.background = 'black';
}


// create hand div

const handClass = ['hour', 'minute', 'second']

function createHandDiv(clock) {
  for (let i = 0; i < 3; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('hand');
    newDiv.classList.add(handClass[i]);
    clock.appendChild(newDiv);
  }
}



export default AnalogClock;
