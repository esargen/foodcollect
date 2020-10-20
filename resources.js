const localorgs = [
  {
    name: "Sustaining Way",
    website: "https://www.sustainingway.org/",
    mission: "Sustaining Way uses education, collaboration and workforce development to build a thriving, sustainable community and environment.",
    engage: "Volunteer with them or visit their model sustainable home and teaching farm, Annie's House, on Thursday's from 4-6!",
  },
  {
    name: "Mill Village Farms",
    website: "https://www.millvillagefarms.org/",
    mission: "Mill Village Farms is part of the larger nonprofit umbrella Mill Community Ministries. They build small and sustainably-managed farms that promote holistic development in their communities by providing employment opportunities for youth and fresh produce in food deserts.",
    engage: "Volunteer with them, donate to them, attend their events, intern with them, or purchase a FoodShare box filled with local produce!",
  },
  {
    name: "Clemson Community Care",
    website: "https://clemsoncommunitycare.org/",
    mission: "CCC provides services for those who need assistance with food, rent utilities, etc.",
    engage: "Visit their website for informtion on how to obtain services like food or rent ssistnce. Volunteer opportunities are also posted on their website.",
  }
];

const clemsonorgs = [
  {
    name: "Solid Green",
    website: "https://www.facebook.com/CURecycling/",
    contact: "",
    mission: "SolidGreen is the recycling program at Clemson. The student side engages in advocacy to bring awareness to the importance of the concepts of reduce, reuse, recycle",
    engage: "Recycle!! Educate yourself on what items can be recycled on Clemson's campus.",
  },
  {
    name: "EcoReps",
    website: "https://housing.clemson.edu/sustainabilit/eco-rep-program/",
    contact: "Lauren Hughes - lhughe6@clemson.edu",
    mission: "EcoReps seek to promote a strong foundation of sustainable lifestyle practices within the Clemson University campus and community, through fostering a culture of awareness, respect, accountability, and education among peers, staff, and faculty.",
    engage: "Join the organization if you live on campus, or support their events and initiatives!",
  },
  {
    name: "Food Science Club",
    website: "https://clemson.campuslabs.com/engage/organization/fstc",
    contact: "Katie Hannahs - khannah@clemson.edu",
    mission: "Food science club promotes and implements initiatives which foster awareness and advancement of students who are in and interested in the Food Science and Technology major",
    engage: "Join the organization, support their club by attending fundraising events at the '55 Exchange during home football games.",
  },
  {
    name: "Nutrition Club",
    website: "http://Clemsonstudentnutritionclub.weebly.com",
    contact: "clemsonnutritionclub@gmail.com",
    mission: "They have monthy meetings with educational presentations about nutrition, food, and dietetics. They also have volunteer events such as Meals on Wheels and other events such as making sushi.",
    engage: "Email them to get on the email list and attend meetings.",
  },
  {
    name: "Agronomy Club",
    website: "https://clemson.campuslabs.com/engage/organization/agronomyclub",
    contact: "plants@clemson.edu",
    mission: "This organization plans and holds events for those interested in plant and environmental sciences. They also attend the annual Borlaug Dialogues and the International Summit for Students in Agriculture and Related Sciences",
    engage: "Support their organization by purchasing plants from their plant sales on library bridge! Join their organization!",
  },
  {
    name: "UNICEF",
    website: "https://clemson.campuslabs.com/engage/organization/clemsonunicef",
    contact: "Lizzie Bear - esbear@clemson.edu",
    mission: "The purpose of the Clemson UNICEF Club is to give back to disadvantaged communities through service work, to provide professional development and facilitate productive careers, and to help students become better persons who contribute to the world.",
    engage: "Join their organization (weekly meetings Sundays at 3pm), and attend their events throughout the year! Last year CFC partnered with UNICEF on the event 'A Seat at the Table'",
  },
  {
    name: "Honors Wellness Ambassadors",
    website: "",
    contact: "",
    mission: "",
    engage: "",
  },
  {
    name: "Latinos Unidos",
    website: "",
    contact: "",
    mission: "",
    engage: "",
  },
  {
    name: "Black Student Union",
    website: "",
    contact: "",
    mission: "",
    engage: "",
  },
  {
    name: "Paw Pantry",
    website: "",
    contact: "pawpantry@clemson.edu Location: University Union Suite 704",
    mission: "This is an on-campus pantry service for all Clemson students free of charge. They have food items, sanitary items, textbooks and school supplies (supplies varying). There are also no questions asked and qualification of need not required for usage.",
    engage: "Donate! Check out the most recent donations list on social media (@cupawpantry on Instagram and Facebook). You can also volunteer, applications come out at the beginning of the semester. Also it would be very helpful if more students could spread the word that they are a free and great resource for students in need.",
  }
];


document.addEventListener('DOMContentLoaded', () => {
  let localorgbank = document.querySelector("#localorg");
  var clemsonorgbank = document.querySelector("#clemsonorg");

  if (localorgbank != 'undefined' && localorgbank != null) {
    for (i=0; i<localorgs.length; i++) {
      let org = localorgs[i];

      let orgchunk = document.createElement('DIV');
      localorgbank.appendChild(orgchunk);
      orgchunk.classList += 'column';

      if (org.hasOwnProperty('website')) {
        let linkcontainer = document.createElement('DIV');
        linkcontainer.classList = "linkcontainer";
        orgchunk.appendChild(linkcontainer);
        newAttr = document.createElement('A');
        linkcontainer.appendChild(newAttr);
        newAttr.classList += 'weblink';
        newAttr.setAttribute("href", org.website);
        newAttr.setAttribute("target", "blank");
        if (org.hasOwnProperty('image')) {
          linkimage = document.createElement('img');
          newAttr.appendChild(linkimage);
          linkimage.setAttribute("src", org.image)
        } else {
          linkplaceholder = document.createElement('p');
          newAttr.appendChild(linkplaceholder);
          let namesplit = org.name.split(" ");
          for (j=0;j<namesplit.length;j++) {
            let initial = namesplit[j].charAt(0);
            linkplaceholder.innerHTML += initial;
          }
        };
      }

      let textcontent = document.createElement('DIV');
      orgchunk.appendChild(textcontent);
      textcontent.classList = "textcontent";

      if (org.hasOwnProperty('name')) {
        newAttr = document.createElement('H4');
        textcontent.appendChild(newAttr);
        newAttr.classList += 'name';
        newAttr.textContent = org.name;
      }

      if (org.mission != "" && org.mission != null) {
        missiontitle = document.createElement('P');
        missiontitle.innerHTML = "what they do";
        missiontitle.classList = "subhead";
        textcontent.appendChild(missiontitle);
        mission = document.createElement('P');
        textcontent.appendChild(mission);
        mission.classList += 'descriptor';
        mission.innerHTML = org.mission;
        }

      if (org.engage != "" && org.engage != null) {
        engagetitle = document.createElement('P');
        engagetitle.innerHTML = "how you can help";
        engagetitle.classList = "subhead";
        textcontent.appendChild(engagetitle);
        engage = document.createElement('P');
        textcontent.appendChild(engage);
        engage.classList += 'descriptor';
        engage.innerHTML = org.engage;
        }
    }
  } else if (clemsonorgbank != 'undefined' && clemsonorgbank != null) {
    for (i=0; i<clemsonorgs.length; i++) {
      let org = clemsonorgs[i];

      let orgchunk = document.createElement('DIV');
      clemsonorgbank.appendChild(orgchunk);
      orgchunk.classList += 'column';

      if (org.hasOwnProperty('website')) {
        let linkcontainer = document.createElement('DIV');
        linkcontainer.classList = "linkcontainer";
        orgchunk.appendChild(linkcontainer);
        newAttr = document.createElement('A');
        newAttr.setAttribute("target", "blank");
        linkcontainer.appendChild(newAttr);
        newAttr.classList += 'weblink';
        newAttr.setAttribute("href", org.website);
        if (org.hasOwnProperty('image')) {
          linkimage = document.createElement('img');
          newAttr.appendChild(linkimage);
          linkimage.setAttribute("src", org.image)
        } else {
          linkplaceholder = document.createElement('p');
          newAttr.appendChild(linkplaceholder);
          let namesplit = org.name.split(" ");
          for (j=0;j<namesplit.length;j++) {
            let initial = namesplit[j].charAt(0);
            linkplaceholder.innerHTML += initial;
          }
        };
      }

      let textcontent = document.createElement('DIV');
      orgchunk.appendChild(textcontent);
      textcontent.classList = "textcontent";

      if (org.hasOwnProperty('name')) {
        newAttr = document.createElement('H4');
        textcontent.appendChild(newAttr);
        newAttr.classList += 'name';
        newAttr.textContent = org.name;
      }

      if (org.mission != "" && org.mission != null) {
        missiontitle = document.createElement('P');
        missiontitle.innerHTML = "what they do";
        missiontitle.classList = "subhead";
        textcontent.appendChild(missiontitle);
        mission = document.createElement('P');
        textcontent.appendChild(mission);
        mission.classList += 'descriptor';
        mission.innerHTML = org.mission;
        }

      if (org.engage != "" && org.engage != null) {
        engagetitle = document.createElement('P');
        engagetitle.innerHTML = "how you can help";
        engagetitle.classList = "subhead";
        textcontent.appendChild(engagetitle);
        engage = document.createElement('P');
        textcontent.appendChild(engage);
        engage.classList += 'descriptor';
        engage.innerHTML = org.engage;
        }
    }} else {
      console.log("error");
    }
  }
  );
