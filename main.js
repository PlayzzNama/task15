const bio = {
    Name: 'Ivan',
    Age: 15,
    Height: 187,
    Place: 'Onok' 
}

for (const key in bio) {
    console.log(`${key}:
${bio[key]}`);
}

const bioJSON = JSON.stringify(bio);
console.log("JSON рядок:", bioJSON);

const prasedBio = JSON.parse(bioJSON);
console.log("Об'єкт з JSON рядка:", prasedBio);

const cloneBio = Object.assign({}, bio);
cloneBio.Name = "Mykola";
console.log("Оригінальний об'єкт:", bio);
console.log("Клонований об'єкт", cloneBio);