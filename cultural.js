const cultural = document.getElementById("cultural");

const culturalevents = [
  {
    hour: "10:15 - 10:45am",
    event: "Presentation by <b>Dr. Ashli Stokes</b>, Director for the Center for the Study of the New South at the University of North Carolina, Charlotte"
  },
  {
    hour: "10:45 - 11:30am",
    event: "Guided Discussion"
  },
  {
    hour: "11:30 - 12:30pm",
    event: "Working Lunch"
  }

]

if (cultural != 'undefined' && cultural != null) {
  for (i=0;i<culturalevents.length;i++) {
    let summitevent = culturalevents[i];
    let eventblock = document.createElement("div");
    eventblock.classList = "event";
    cultural.appendChild(eventblock);
    if (summitevent.hasOwnProperty("hour")) {
      let eventtime = summitevent.hour;
      let timeblock = document.createElement("p");
      timeblock.textContent = eventtime;
      eventblock.appendChild(timeblock);
    }
    if (summitevent.hasOwnProperty("event")) {
      let eventnature = summitevent.event;
      let natureblock = document.createElement("p");
      natureblock.innerHTML = eventnature;
      eventblock.appendChild(natureblock);
    }
  }
}
