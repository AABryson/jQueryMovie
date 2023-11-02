let moviesList = [];
// const button = document.querySelector('button');
// let $formbutton = $('#formbutton');
const $title = $('#title');
const $rating = $('#rating');
const $form = $('form');
const $table = $('table');



$(function(){
    // $formbutton.on('submit', function(event){
    $form.on('submit', function(event){
        event.preventDefault();
        //do I need to reset the form here?
        
        //assign input values
        let title = $title.val();
        console.log(title);
        let rating = $rating.val();
        console.log(rating);
        //create table row and two data boxes
        let $tbody = $('<tbody>');
        let $tableRow = $('<tr>');
        let $tableData1 = $('<td>');
        let $tableData2 = $('<td>');
        let $button = $('<button>');
        $button.text('Remove')
        //make input values text for tds
        $tableData1.text(title);
        $tableData2.text(rating);
        //create and append new div for table
        // const div2 = $('<div>');
        // $container.append(div2);
        $table.append($tbody);
        $tbody.append($tableRow);
        $tableRow.append($button);
        $tableRow.append($tableData1);
        $tableRow.append($tableData2);
        
        //this wouldn't reset until i added [0].  Why?
        $form[0].reset();

    });
    //tried to simplify the code; was able to get it to remove the text but had to stop there;
    $table.on('click', 'button', function(event){
        console.log('clicked on button to remove')
        console.log(event.target)
        if (event.target.tagName === 'BUTTON') {
            console.log('event target was button');
            let btn = event.target.tagName;
            console.log(btn);
            $(this).siblings().remove();
        } 
    })
})
        
        
      
        // console.log(titleInputValue);
        // console.log(ratingInputValue);
        // moviesList.push(movieData);

    
        // p.innerText = titleInputValue;
        // p2.innerText = ratingInputValue;

        
    
