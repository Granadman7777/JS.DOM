const telephon = {
    name: 'Samsung',
    avatar: './',
    description: 'DichDich',
    price: '100$'
};

const telephoneArray = [
    {
        name: 'Samsung',
    avatar: './',
    description: 'DichDich',
    price: '100$'
    },
    {
    name: 'Nokia',
    avatar: './',
    description: 'DichDich',
    price: '50$'
    },
    {
        name: 'Xiaomi',
        avatar: './',
        description: 'DichDich',
        price: '150$'
        }
]

for(const tel of telephoneArray) {
    console.log(`pfhone ${tel.name} prices ${tel.price}`)
}
///////////////////////////////////////////////////////////////

const userData = {
id: 1,
name: 'John',
discription: 'awagagfaf',
profilePictures: 'asfewagwegssf'
};

const root = document.querySelector('#root')

function creatrCard(user) {
const article = document.createElement('article');
article.classList.add('card-wrapper');

const img = document.createElement('img');
img.classList.add('card-image');
img.setAttribute('src', user.profilePictures);
img.setAttribute('alt',user.name);

const h2 = document.createElement('h2');
h2.classList.add('username')
h2.append(user.name);

const p = document.createElement('p');
p.classList.add('discription');
p.append(user.discription);

article.append(img, h2, p);
root.append(article);
}

creatrCard(userData);
