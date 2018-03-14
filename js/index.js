$( document ).ready(function(){
    // let addBtn = $('#plus'),minusBtn = $('#minus') 
    $('#plus').click(function(){
        let val = parseInt($('#hello').text())
        val++;
        $('#hello').text(val)
        localStorage.setItem('val',JSON.stringify(val))
    })

    $('#minus').click(function(){
        
        let val = parseInt($('#hello').text())
        ,quantity = val
        if(val>0){
        val--;
        $('#hello').text(val)
        }
        else{
            alert('Quantity cann\'t be negative')
        }
    })
});