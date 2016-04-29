$(function () {
  $(document).on('keyup', '#field', function (event) {
     if($(this).val() === 'hej')
        {
          $.ajax({
          type: 'GET',
          url:'http://127.0.0.1:8081',
          dataType:"json",
          crossDomain: true,
         success: function(data) {
                    $('#field').val(data.dataFromServer);
   }
});
          //$.getJSON('http://127.0.0.1:8081', function (data) {
          //      alert(data.dataFromServer);
          //      $(this).val(data.dataFromServer);
          //  });
        }
    });
  });
