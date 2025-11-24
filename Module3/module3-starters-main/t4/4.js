'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const target = document.getElementById('target');

students.forEach(st => {
  const opt = document.createElement('option');
  opt.value = st.value;
  opt.textContent = st.name;
  target.appendChild(opt);
});
