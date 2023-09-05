
class temperature{
    Celsius;
    Fahrenheit;
    constructor(){
        this.Celsius = 12;
        this.Fahrenheit = 14;
        
    }
    

}

document.addEventListener('DOMContentLoaded', function() {
    //Main Pages
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
    }

    //temp subpage
    var pages = document.getElementsByClassName('tempsubpage');
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
    }
    
    //weight subpage
    var pages = document.getElementsByClassName('weightsubpage');
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
    }

    //currency subpage
    var pages = document.getElementsByClassName('currsubpage');
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
    }
  
});


function switchtemp(pageId) {
    // Hide all pages
    var pages = document.getElementsByClassName('tempsubpage');
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
    }
  
    // Show the selected page
    var selectedPage = document.getElementById(pageId);
    selectedPage.style.display = 'block';
  }


  function switchweight(pageId) {
    // Hide all pages
    var pages = document.getElementsByClassName('weightsubpage');
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
    }
  
    // Show the selected page
    var selectedPage = document.getElementById(pageId);
    selectedPage.style.display = 'block';
  }

  function switchcurr(pageId) {
    // Hide all pages
    var pages = document.getElementsByClassName('currsubpage');
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
    }
  
    // Show the selected page
    var selectedPage = document.getElementById(pageId);
    selectedPage.style.display = 'block';
    
    $.ajax({
      url: 'https://api.currencybeacon.com/v1/latest?api_key=ElgQtrutc8yMEaAOawV0eGtiEKteJDQd',
      dataType: 'json',
      success: function(json) {
  
        // exchange rate data is stored in json.rates
        EUR_Rate = (json.rates.EUR);
        console.log("Current EUR_Rate = " + EUR_Rate);
  
        if(pageId === "USDtoEUR"){
          EUR_Rate = EUR_Rate;
          var roundedResult = EUR_Rate.toFixed(4);
          document.getElementById("currUSDRate").textContent =  "Current Rate: " + roundedResult;
  
        }
        if(pageId === "EURtoUSD"){
          EUR_Rate = 1 / EUR_Rate;
          
          var roundedResult = EUR_Rate.toFixed(4);
          document.getElementById("currEURRate").textContent =  "Current Rate: " + roundedResult;
  
        }
  
      
      },
      error: function(xhr, status, error) {
        console.error('Request failed:', error);
      }
    });
  
    
  }
  
  
  
  // Fahrenheit to Celsius
function FtoCresult(){
    var FtoC1 = parseFloat(document.getElementById("FtoC1").value);

    var FtoCresult = (5/9)*(FtoC1-32);
    var roundedResult = FtoCresult.toFixed(1);
    document.getElementById("FtoCresult").textContent = roundedResult + " C";


}
//Celsius to Fahrenheit
function CtoFresult(){
    var CtoF1 = parseFloat(document.getElementById("CtoF1").value);

    var CtoFresult = (CtoF1*(9/5))+32;
    var roundedResult = CtoFresult.toFixed(0);
    document.getElementById("CtoFresult").textContent = roundedResult + " F";


}

//Pounds to Kilograms
function LbtoKgresult(){
    var Lb = parseFloat(document.getElementById("LbtoKg1").value);

    var LbtoKgresult = Lb / 2.205;
    var roundedResult = LbtoKgresult.toFixed(1);
    document.getElementById("LbtoKgresult").textContent = roundedResult + " kg";


}
//Kilograms to Pounds 
function KgtoLbresult(){
    var Kg = parseFloat(document.getElementById("KgtoLb1").value);

    var KgtoLbresult =  Kg * 2.205;
    var roundedResult = KgtoLbresult.toFixed(1);
    document.getElementById("KgtoLbresult").textContent = roundedResult + " lb";


}

// USD to EUR
function USDtoEURresult(){


  $.ajax({
    url: 'https://api.currencybeacon.com/v1/latest?api_key=ElgQtrutc8yMEaAOawV0eGtiEKteJDQd',
    dataType: 'json',
    success: function(json) {

      // exchange rate data is stored in json.rates
      EUR_Rate = (json.rates.EUR);
      console.log("Current EUR_Rate = " + EUR_Rate);

      var USD = parseFloat(document.getElementById("USD").value);

    var USDtoEURresult =  USD * EUR_Rate;
    var roundedResult = USDtoEURresult.toFixed(2);
    document.getElementById("USDtoEURresult").textContent =  "€ " + roundedResult;

    },
    error: function(xhr, status, error) {
      console.error('Request failed:', error);
    }
  });

   

}

// EUR to USD

/*
function EURtoUSDresult(){
    
  var EUR = parseFloat(document.getElementById("EUR").value);
  
    var EURtoUSDresult =  EUR / 0.890671;
    var roundedResult = EURtoUSDresult.toFixed(2);
    document.getElementById("EURtoUSDresult").textContent = "$ " + roundedResult;


}
*/

function EURtoUSDresult(){
  
  $.ajax({
    url: 'https://api.currencybeacon.com/v1/latest?api_key=ElgQtrutc8yMEaAOawV0eGtiEKteJDQd',
    dataType: 'json',
    success: function(json) {

      // exchange rate data is stored in json.rates
      EUR_Rate = (json.rates.EUR);
      console.log("EUR_Rate = " + EUR_Rate);

      var EUR = parseFloat(document.getElementById("EUR").value);
  
    var EURtoUSDresult =  EUR / EUR_Rate;
    var roundedResult = EURtoUSDresult.toFixed(2);
    document.getElementById("EURtoUSDresult").textContent = "$ " + roundedResult;

    },
    error: function(xhr, status, error) {
      console.error('Request failed:', error);
    }
  });
  
}

function showPageAndChangeColor(page, buttonClass) {
    showPage(page);
    changeColor(buttonClass);
  }


function showPage(pageId) {
    // Hide all pages
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
    }
  
    // Show the selected page
    var selectedPage = document.getElementById(pageId);
    selectedPage.style.display = 'block';
    

  }

  
  


  

  
  


  
