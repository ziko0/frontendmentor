function age() {
    
    // get value from  inputs
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    
    let check = document.getElementsByTagName("input");
    for(let i=0; i < check.length;i++) {
        if (check[i].value ==='')
        {
            document.getElementById("month").innerHTML += `<p class="error">enter month</p>`
            return false;
        }; 
      };

    // get current date
    let date = new Date();
    let cDay = date.getDate();
    let cMonth = 1 + date.getMonth();
    let cYear = date.getFullYear();
    let monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(day > cDay){
        cDay = cDay + monthArr[cMonth - 1];
        cMonth = cMonth - 1;
    }
    if(month > cMonth){
        cMonth = cMonth + 12;
        cYear = cYear - 1;
    }

    const d = cDay - day;
    const m = cMonth - month;
    const y = cYear - year;

    document.getElementById("c-year").innerHTML = y;
    document.getElementById("c-month").innerHTML = m;
    document.getElementById("c-day").innerHTML = d;

}