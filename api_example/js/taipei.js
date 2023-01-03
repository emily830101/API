$(function () {
  $.ajax({
    url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-B07587C1-6DD3-4673-9CF4-3344E4B60995&format=JSON&locationName=%E8%87%BA%E5%8C%97%E5%B8%82",
    method: "GET",
    dataType: "JSON",
    // data: post才會用

    success: function (res) {
      console.log(res.records.locations[0].locationName);
      $('#city_name').html(res.records.locations[0].location)
    },
    error: function (err) {
      console.log(err);
    }
  });
});
