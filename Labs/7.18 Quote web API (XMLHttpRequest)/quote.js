window.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

        // Get values from drop-downs
        const topicDropdown = document.querySelector("#topicSelection");
        const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
        const countDropdown = document.querySelector("#countSelection");
        const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;

        // Get and display quotes
        fetchQuotes(selectedTopic, selectedCount);
    });
});

function fetchQuotes(topic, count) {
    // TODO: Modify to use XMLHttpRequest
    let xhr = new XMLHttpRequest();
    //xhr.addEventListener("load", function () {responseReceivedHandler(xhr, topic, count)});
    xhr.addEventListener("load", responseReceivedHandler);
    xhr.responseType = "json";
    const url = "https://wp.zybooks.com/quotes.php";
    const queryString = `topic=${topic}&count=${count}`;
    xhr.open("GET", `${url}?${queryString}`);
    xhr.send();
    //console.log(`${url}?${queryString}`);

    let html = "<ol>";
    for (let c = 1; c <= count; c++) {
        html += `<li>Quote ${c} - Anonymous</li>`;
    }
    html += "</ol>";

    document.querySelector("#quotes").innerHTML = html;
}

// TODO: Add responseReceivedHandler() here
function responseReceivedHandler() {//xhr, topic, count) {
    let xhr = this;
    console.log(xhr);
    let html = "";

    //console.log(xhr.status);
    if (xhr.status === 200) {
        const quotes = xhr.response;
        //console.log(quotes.length);

        if (quotes.length === undefined) {
            //console.log(quotes.length + " != " + parseInt(count));
            //console.log(typeof(quotes.length) + " " + typeof(count));
            console.log(quotes.error);
            html += `${quotes.error}`
        } else {
            html = "<ol>";
            for (let c = 0; c < quotes.length; c++) {
                let response = xhr.response[c];
                console.log(response);
                html += `<li>${response.valueOf().quote} - ${response.valueOf().source}</li>`;
            }
            html += "</ol>";
        }
    } else {
        html += `Error loading from API`
    }
    document.querySelector("#quotes").innerHTML = html;
}