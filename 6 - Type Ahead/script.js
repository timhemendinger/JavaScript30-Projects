const cities = [];
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const suggestionList = document.querySelector('.suggestions');
const searchText = document.querySelector('.search');

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(inp) {
    var reg = new RegExp(inp, 'gi');

    var matches = cities.filter(function(value) {
        return (value.city.match(reg) || value.state.match(reg));
    });

    return matches.map(function(item){
        return `<li>
                    ${item.city}, ${item.state}
                    <span class="population">${numberWithCommas(item.population)}</span>
                </li>`;
    }).join('');
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

searchText.addEventListener('keyup', function() {
    var thisVal = this.value;
    if (thisVal) {
        suggestionList.innerHTML = findMatches(this.value);
    } else {
        suggestionList.innerHTML = "<li>Filter for a city</li><li>or a state</li>"
    }
    
});