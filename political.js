const political = document.getElementById("political");

const politicalevents = [
  {
    hour: "3:35 - 3:45pm",
    event: "Presentation by <b>Hannah Scott</b> - President of Clemson PawPantry",
    speaker: "hannah",
    link: "https://www.youtube.com/watch?v=Fowgc-J4kCc"
  },
  {
    hour: "3:45 - 4:45pm",
    event: "Guided discussion"
  },
  {
    hour: "4:45 - 5:00pm",
    event: "Closing remarks for the day"
  }
]


if (political != 'undefined' && political != null) {
  for (i=0;i<politicalevents.length;i++) {
    let summitevent = politicalevents[i];
    let eventblock = document.createElement("div");
    eventblock.classList = "event";
    political.appendChild(eventblock);
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

document.getElementById("hannah").setAttribute("href", "");
