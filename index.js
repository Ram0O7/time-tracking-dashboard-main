const timeSpan = document.querySelector('.routine-box')
    const btns = timeSpan.getElementsByTagName('span');
    const nowTime = document.querySelectorAll('.time-header');
    const prevTime = document.querySelectorAll('.prev-time');
    const jsonData = fetch("data.json")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        return json;
      });

      for(let j=0;j<3;j++){
        btns[j].addEventListener('click',function(){

                  for (let i = 0; i < 6; i++) {
            const gotData = async () => {
            let data = await jsonData;

            if (btns[j].innerText=="Daily") {
             console.log(data[i].timeframes.daily.current)
             nowTime[i].innerText = data[i].timeframes.daily.current + "hrs";
             prevTime[i].innerText = "Last Day - " + data[i].timeframes.daily.previous + "hrs";
            } 

            if (btns[j].innerText=="Weekly") {
             console.log(data[i].timeframes.daily.current)
             nowTime[i].innerText = data[i].timeframes.weekly.current + "hrs";
             prevTime[i].innerText = "Last Week - " + data[i].timeframes.weekly.previous + "hrs";
            } 

            if (btns[j].innerText=="Monthly") {
             console.log(data[i].timeframes.daily.current)
             nowTime[i].innerText = data[i].timeframes.monthly.current + "hrs";
             prevTime[i].innerText = "Last Month - " + data[i].timeframes.monthly.previous + "hrs";
            } 
            
            };      
            gotData();
          }
        });
      }
