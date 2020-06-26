const persons = [
  {
    name: 'Emma Sargent',
    position: 'Designer',
    description: 'A junior Architecture major from Aiken, SC, Emma joined in 2020. Her favorite food is layer cake, although peanut butter is a strong second. She handles our publication, Active Culture, in addition to the website and anywhere we need design.',
    image: 'static/person.jpg',
    imagesec: 'static/kale.jpg',
  },
  {
    name: 'Carson Colenbaugh',
    position: 'Media Director',
    description: 'A sophomore Horticulture major from Kennesaw, Georgia, Carson joined the Food Collective team in 2018.  His favorite fruit is the scuppernong, and he could eat fajitas every day.  As a part of the Food Collective Executive Committee,  Carson is in charge of producing our biweekly newsletter, Inch x Inch, and handling tasks for some of the pop-up events, as well as participating in planning the annual Clemson Food Summit.',
    image: 'static/carson.jpg'
  },
  {
    name: 'Frances Schueren',
    position: 'Executive Director',
    description: 'A junior in Food Science and Technology with an emphasis on sustainability and minors in plant and environmental science and chemistry, Frances is passionate about making food for everyone to enjoy, especially kids. When she isn’t making stovetop curry or chocolate banana bread, she is coordinating events, and meeting with faculty to improve CFC. She has been working with CFC for 3 years.',
    image: 'static/bean.jpg'
  }
]

const profiles = document.querySelector('.row');

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
    newAttr = document.createElement('P');
    profile.appendChild(newAttr);
    newAttr.classList += 'description';
    newAttr.textContent = person.description;
  }
}
});
