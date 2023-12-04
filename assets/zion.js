(function() {
    var apiKey = 'YFj5Txvt7sjKupHyAmjtATVUE88OHcLhrOqx0fDx';
    var parkCode = 'zion'; // Park code for Zion National Park

    function fetchThingsToDo() {
        fetch(`https://developer.nps.gov/api/v1/thingstodo?parkCode=${parkCode}&api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                if (data.data && data.data.length > 0) {
                    var thingsToDo = data.data.slice(0, 5); // Limit to 5 items
                    var parkListElement = document.getElementById('park-list');

                    thingsToDo.forEach(item => {
                        var itemElement = document.createElement('p');
                        let itemText = item.title;
                        if (item.description) {
                            itemText += ': ' + item.description;
                        } 
                        itemElement.textContent = itemText;
                        parkListElement.appendChild(itemElement);
                    });
                } else {
                    console.error("No 'Things to Do' found in the API response");
                }
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }

    window.addEventListener('load', fetchThingsToDo);
})();
