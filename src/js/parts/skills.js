function skills() {
  /* ----------------------------- display a list of skill ----------------------------- */

  const skillsList = document.querySelector('.skills__list');

  const skills = [
    'HTML',
    'CSS/SCSS/SASS',
    'JavaScript',
    'React/Redux',
    'Next.js',
    'jQuery',
    'Ionic Framework',
    'Git/GitHub',
    'NPM',
    'TypeScript',
    'Webpack',
    'Babel',
    'Node.js',
    'Express.js/EJS',
    'MongoDB/Mongoose',
    'Angular',
    'PHP',
    'SQL/MySQL',
  ];

  skillsList.innerHTML = skills
    .map(
      (skill) => `
      <li class='skills__item'>
        ${skill}
        <i class='far fa-check-circle skills__icon'></i>
      </li>`
    )
    .join('');
}
module.exports = skills;
