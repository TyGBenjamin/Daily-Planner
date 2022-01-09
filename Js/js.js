$(document).ready(function () {
    function schedule(){
        localStorage.getItem()


    }

    $('#currentDay').text(moment().format("MMM Do YY"));
    $('inputTextArea');

    // creating for each loop. 

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




// stroing to local storage
    $('.saveBtn').on('click', function () {
 
        // console.log($(this).parent());
        var inputText = $(this).prev().val();
        // console.log(inputText);
        var hourBlock = $(this).parent().attr("id");
        var update =JSON.parse(localStorage.getItem("desccription"))
        localStorage.setItem(hourBlock, inputText);
        // localStorage.setItem("hour", hourBlock);
        localStorage.getItem(hourBlock, inputText);

        var dataObject = {
        }
        







        

        
        // get the schedule object from local storage
        //parse into a json object or array 
        //if local storage has schedule then update index taht was saved to. 
        //set schedule object back to local storage
    



            //pulling from local storage
            
        
        //json string
        // var saveInput = localStorage.setItem([], saveInput.value);
        // var displayInput = localStorage.getItem("input");

  


        // set local

    })
    //get item keep outside of that function to have displayed right away


    window.onload = function() {

        var name = localStorage.getItem("name");
        if (name !== null) $('#inputName').val("name");
    
        // ...
    }
    //pulling from localStorage
    // function pullData(){
    //  inputText this).prev().val();
    // }
});



// .x.on('click', function(){

// });