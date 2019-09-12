$(document).ready(function() {
// write your code here
    $.getJSON("data.json", function(data) {
        var spot_data = '';
        $.each(data, function(key, value){
            spot_data += '<tr>';
            spot_data += '<td>'+value.name+'</td>';
            spot_data += '<td>'+value.description+'</td>';
            spot_data += '<td>'+'<a href="https://www.google.com/maps?q='+value.location+'">'+'<button>'+'Open in Google Maps'+'</button>'+'</a>'+'</td>';
            spot_data += '</tr>';
        });
        $('#spot_table').append(spot_data);
    });
});
