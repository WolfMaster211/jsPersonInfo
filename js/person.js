const name = 'Raivo Vara'
const age = 19;
const job = 'Student';
const city = 'Tabasalu';
const male = 'Male';

const html = `
    <h1> ${fullDate}</h1>
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Gender: ${male}</li>
    </ul>


`;

document.body.innerHTML = html;