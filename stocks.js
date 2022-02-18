let stockValue = document.querySelector('.stockValue');

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        let tic = JSON.parse(this.responseText)['Global Quote']['01. symbol'];
        let pri = JSON.parse(this.responseText)['Global Quote']['05. price'];
        pri = Number(pri).toFixed(2);
        let perChange = JSON.parse(this.responseText)['Global Quote']['10. change percent'];
        let newPerChange = perChange.slice(0, perChange.length-1);
        newPerChange = Number(newPerChange).toFixed(2);
        let vol = JSON.parse(this.responseText)['Global Quote']['06. volume'];

        document.getElementById("stockSymbol").innerHTML = 'Ticker: ' + tic;
        document.getElementById("stockPrice").innerHTML = 'Price: ' + pri;
        document.getElementById("stockChangePer").innerHTML = 'Change Percent: ' + newPerChange + ' %';
        document.getElementById("stockVolume").innerHTML = 'Volume: ' + vol;

        if(newPerChange < 0){
            document.getElementById("stockChangePer").style.color = 'red';
        } else{
            document.getElementById("stockChangePer").style.color = 'green';
        }
    }

    xhttp.open("GET", "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+ stockValue.value +"&apikey=84A5C0B1MB98KZUL", true);
    xhttp.send();
  }

