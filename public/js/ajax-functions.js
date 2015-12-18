'use strict';

function ajaxRequest (method, url, callback, data) {
    $.ajax({
                url:  url,
                dataType: 'json',
                data: JSON.stringify(data),
                type: method,
                success:  function(successData){
                 callback(successData);
                },
                error: function(xhr, status, err){
                    console.error(url, status, err.toString());  
                }
            });
}