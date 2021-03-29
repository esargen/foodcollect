const environmental = document.getElementById("environmental");

const environmentalevents = [
  {
    hour: "12:30 - 12:45 pm",
    event: "Presentation by <b>Makenna Kull</b> - Student Leader of Clemson’s Food Waste Recovery efforts"
  },
  {
    hour: "12:45 - 1:45pm",
    event: "Guided discussion"
  },
  {
    hour: "1:45 - 2:15pm",
    event: "Closing panel"
  }
]

if (environmental != 'undefined' && environmental != null) {
  for (i=0;i<environmentalevents.length;i++) {
    let summitevent = environmentalevents[i];
    let eventblock = document.createElement("div");
    eventblock.classList = "event";
    environmental.appendChild(eventblock);
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
