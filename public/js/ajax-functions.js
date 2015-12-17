'use strict';

function ajaxRequest (method, url, callback) {
    $.ajax({
                url:  url,
                dataType: 'json',
                type: method,
                success:  function(data){
                 callback(data);
                },
                error: function(xhr, status, err){
                    console.error(url, status, err.toString());  
                }
            });
}