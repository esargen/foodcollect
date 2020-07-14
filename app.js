const persons = [

  {
    name: 'Reagan Ross',
    position: 'Co-Director',
    description: "A senior double major in Anthropology and Food Science & Technology with an emphasis in sustainability, Reagan is passionate about the deeply rooted ways food affects our culture and how we see the world. She can also tell you all about your favrite cheeses and ice creams, and she'll top anything with tahini and sriracha. Reagan joined the Clemson Food Collective in 2018 and during the past two years, she has worked to bring local, sustainable, and equitable food to the table for CFC events and has helped to bring forth positive relationships between Clemson University and the Upstate community. This year she is over the moon to move into an Executive Director position with Co-Director Ronnie Clevenstine.",
    image: 'static/kale.jpg',
    email: 'raross@clemson.edu'
  },
  {
    name: 'Ronnie Clevenstine',
    position: 'Co-Director',
    description: 'Despite being a junior in Economics with a double minor in Mathemathics and Sustainability, Ronnie spends most of her time at Clemson in the sociology or political science department researching and discussing the social dimensions of our food system. Ronnie joined the CFC Team in the fall of her freshman year, thinking that sustainable, resilient local food systems were the sustainable solution of the future, and has found herself utterly obsessed with learning more about food equity, justice, and culture. She is incredibly excited to be share the Executive Director role with Reagan Ross and cannot wait to see CFC\'s continued growth on campus. ',
    email: 'vcleven@clemson.edu'
  },
  {
    name: 'Frances Schueren',
    position: 'Finance Director',
    description: 'A junior in Food Science and Technology with an emphasis on sustainability and minors in plant and environmental science and chemistry, Frances is passionate about making food for everyone to enjoy, especially kids. When she isn’t making stovetop curry or chocolate banana bread, she is coordinating events, and meeting with faculty to improve CFC. She has been working with CFC for 3 years.',
    image: 'static/bean.jpg'
  },
  {
    name: 'Emma Sargent',
    position: 'Executive Designer',
    description: 'A junior Architecture major from Aiken, SC, Emma is most likely to be found thumbing through old cookbooks or sketching out her next ambitious dessert project. A passion for design and interest in the present-day conversation about food has landed her the sweet gig of CFC Executive Designer, <span style="randomcolor">web designer</span>, and manager for our publication, Active Culture.',
    image: 'static/strawberry.jpg',
    email: 'esargen@g.clemson.edu'
  },
  {
    name: 'Carson Colenbaugh',
    position: 'Media Director',
    description: 'A sophomore Horticulture major from Kennesaw, Georgia, Carson joined the Food Collective team in 2018. His favorite fruit is the scuppernong, and he could eat fajitas every day. As a part of the Food Collective Executive Committee, Carson is in charge of producing our biweekly newsletter, Inch x Inch, and handling tasks for some of the pop-up events, as well as participating in planning the annual Clemson Food Summit.'
  },
]

const profiles = document.querySelector('.row');

const themecolors = ['#bdcc3e', '#ff7538', '#40ccc8'];

document.addEventListener('DOMContentLoaded', () => {
  for (i=0; i<persons.length; i++) {
    let person = persons[i];

    const profile = document.createElement('DIV');
    profiles.appendChild(profile);
    profile.classList += 'column';

    const profilepic = document.createElement('DIV');
    profile.appendChild(profilepic);
    profilepic.classList += 'profilepic';

    if (person.hasOwnProperty('image')) {
      newImg = document.createElement('IMG');
      profilepic.appendChild(newImg);
      newImg.src = person.image;
    }

    if (person.hasOwnProperty('name')) {
      newAttr = document.createElement('H4');
      profile.appendChild(newAttr);
      newAttr.classList += 'name';
      newAttr.textContent = person.name;
    }
    if (person.hasOwnProperty('position')) {
      newAttr = document.createElement('H5');
      profile.appendChild(newAttr);
      newAttr.classList += 'position';
      newAttr.textContent = person.position;
    }
    if (person.hasOwnProperty('description')) {
      description = document.createElement('P');
      profile.appendChild(description);
      description.classList += 'description';
      description.innerHTML = person.description;
      if (description.clientHeight > 200) {
        description.style.maxHeight = "200px";
        readMore = document.createElement('p');
        profile.appendChild(readMore);
        readMore.classList += "readmore";
        readMore.textContent = "read more";
      }
      if (person.name === "Emma Sargent") {
        designer = document.getElementsByTagName("span");
        designchar = designer[0];

        designchar.addEventListener("mouseover", () => {
            colorinterval = setInterval(function() {
                randomnumber = Math.floor(Math.random() * themecolors.length);
                randomcolor = themecolors[randomnumber];
                designchar.style.color = randomcolor;
                designchar.style.fontWeight = "bold";
              }, 250)
        });
        designchar.addEventListener("mouseout", () => {
          clearInterval(colorinterval);
          designchar.style.color = "darkgrey";
          designchar.style.fontWeight = "normal";
        });
    }
  }
    if (person.hasOwnProperty('email')) {
      newAttr = document.createElement('A');
      profile.appendChild(newAttr);
      newAttr.classList += 'emaillink';
      newAttr.setAttribute("href", "mailto:" + person.email);
      newAttr.innerHTML = '<i class="fa fa-envelope" aria-hidden="true"></i>';
    }
  }
});

var description = document.querySelectorAll(".description");

document.addEventListener("click", () => {
  if (event.target.matches(".readmore")) {
    readMore = event.target;
    parent = event.target.parentNode;
    description = parent.querySelector(".description");
    if (description.style.maxHeight === "200px") {
      readMore.textContent = "close";
      description.style.maxHeight = "";
    } else {
      readMore.textContent = "read more";
      description.style.maxHeight = "200px";
    }
  }
});
