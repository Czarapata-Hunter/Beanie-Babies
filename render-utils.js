export function renderBeanie(beanie) {
    const li = document.createElement('li');
    li.classList.add('card');

    const h2 = document.createElement('h2');
    h2.textContent = beanie.title;

    const attributes = document.createElement('p');
    attributes.classList.add('attributes');

    const astrologySign = document.createElement('span');
    astrologySign.textContent = beanie.astrologySign;

    const subtheme = document.createElement('span');
    subtheme.textContent = beanie.subtheme;

    const animal = document.createElement('span');
    animal.textContent = beanie.animal;

    attributes.append(animal, subtheme, astrologySign);

    const img = document.createElement('img');
    img.src = beanie.image;
    img.alt = beanie.title;

    const content = document.createElement('div');
    content.classList.add('content');

    const released = document.createElement('p');
    released.classList.add('released');
    released.textContent = `Released ${beanie.releaseYear}`;

    content.append(h2, attributes, released);

    li.append(img, content);

    return li;
}
