$(document).ready(function () {

    //this function may not be of use will leave just in case need to refer to 
        function schedule(){
        var update = JSON.parse(localStorage.getItem("dataEntry"))
        if(update === null)
        JSON.parse(localStorage.getItem("dataEntry"));
        $('.description').each(function(){
            
            $('.description').innerHTML=update
        })
    }


    

    $('#currentDay').text(moment().format("MMM Do YY"));
    $('inputTextArea');

    
    // creating for each loop to apply CSS styles to each row as the time changes

    function changeHour() {
        var currentHour = moment().hours();
        $('.time-block').each(function () {
            var currentBlockHour = parseInt($(this).attr('id').split("-")[1])
            if (currentBlockHour < currentHour) {
                $(this).addClass('past')
            }
            else if (currentBlockHour === currentHour) {
                $(this).addClass('present')
            }

            else {
                $(this).addClass('future')
            }
        })

    }

    changeHour();
    schedule();



    // stroing to local storage when Save Button is clicked. 
    $('.saveBtn').on('click', function () {

        var dataObject = {
        }
        // this in this case is referrring to the save button.
        // console.log($(this).parent());
        var inputText = $(this).prev().val();
        // console.log(inputText);
        var hourBlock = $(this).parent().attr("id");
        var update = JSON.parse(localStorage.getItem("dataEntry"))

        if (update === null) {
            dataObject[hourBlock] = inputText
            localStorage.setItem("dataEntry", JSON.stringify(dataObject));
        }
        else {
            update[hourBlock] = inputText
            localStorage.setItem("dataEntry", JSON.stringify(update));
        }








    });

    function retrieveData(){
        var storedData = JSON.parse(localStorage.getItem("dataEntry"))
        if (storedData===null)
        return
    
        var infoBox=Object.entries(storedData)
        infoBox.forEach(function(input){
            var hour = input[0]
            var textEntry= input[1]
            var timeHourEl = $("#"+input[0])
            var textAreaEl= timeHourEl.children("textarea")
            JSON.parse(localStorage.getItem("dataEntry"))
            textAreaEl.val(textEntry)
            $('.description').text=storedData[1]
        })





    }
    retrieveData()

    }

);



