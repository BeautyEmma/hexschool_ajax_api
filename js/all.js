$(function () {

    $('.search').on('click', function (e) {

        //creat map
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 13,
            center: {
                lat: 22.625524,
                lng: 120.29801700000007
            }
        });

        //define geocoder
        var geocoder = new google.maps.Geocoder();

        e.preventDefault();
        $.ajax({
            type: 'GET',
            async: true,
            dataType: 'json',
            url: 'data.json',
            success: function (data) {

                var dis = $('#dis').val();

                //var thisData = JSON.parse(data);
                var thisData = jQuery.parseJSON(JSON.stringify(data));

                $('.result').html('');

                for (i = 0; thisData.length > i; i++) {

                    name = thisData[i].Title;

                    if (thisData[i].Address.indexOf(dis) > -1) {
                        str = '<li>' + thisData[i].Title + '</li>' + '<p>地址 : ' + thisData[i].Address + '</p>';
                        //addr.push(thisData[i].Address);
                        $('.result').append(str);

                        geocodeAddress(geocoder, map);

                        function geocodeAddress(geocoder, resultsMap) {

                            //定義address等於str裡的address
                            //var address = document.getElementById('address').value;
                            //var address = document.getElementsByClassName('.address')[0].value ;
                            //var addr = ['高雄市前鎮區新光路61號', '高雄市前鎮區新光路61號'];
                            var address = thisData[i].Address;

                            //引數帶進來的geocoder的geocode
                            geocoder.geocode({
                                'address': address
                            }, function (results, status) {
                                if (status === google.maps.GeocoderStatus.OK) {
                                    
                                    resultsMap.setCenter(results[0].geometry.location);
                                    console.log(results[0].geometry.location);
                                    
                                    var marker = new google.maps.Marker({
                                        map: resultsMap,
                                        position: results[0].geometry.location
                                    });
                                    console.log('location: '+results[0].geometry.location)
                                } else {
                                    alert('Geocode was not successful for the following reason: ' + status);
                                } // end of else
                            }); // end of geocoder.geocode
                        } // end of geocodeAddress function
                    } // end of if
                } // end of for
            } // end of success function
        }); // end of ajax get data
    }); //end of dis click function
}); // end of page load function


//
//function initMap() {
//    var map = new google.maps.Map(document.getElementById('map'), {
//        zoom: 13,
//        center: {
//            lat: 22.625524,
//            lng: 120.29801700000007
//        }
//    });
//
//    //開始使用，定義geocoder
//    var geocoder = new google.maps.Geocoder();
//
//    //如果輸入按鈕click了就執行function裡的geocodeAddress帶入參數geocoder,map
//    document.getElementById('submit').addEventListener('click', function () {
//        geocodeAddress(geocoder, map);
//    });
//
//}
//
//function geocodeAddress(geocoder, resultsMap) {
//
//    //定義address等於str裡的address
//    //var address = document.getElementById('address').value;
//    //var address = document.getElementsByClassName('.address')[0].value ;
//    var addr = '高雄市前鎮區新光路61號';
//    var address = addr;
//    console.log('var address: ' + address);
//
//    //引數帶進來的geocoder的geocode
//    geocoder.geocode({
//        'address': address
//        //address屬性為上面定義的address(輸入框address的值)
//
//    }, function (results, status) {
//        if (status === google.maps.GeocoderStatus.OK) {
//
//            //如果status是ok的，引數resultsMap帶入第二層function引數result陣列的第一個資料的位置
//            resultsMap.setCenter(results[0].geometry.location);
//
//            var marker = new google.maps.Marker({
//
//                //新增一個marker，把上面的位置丟進來
//                map: resultsMap,
//                position: results[0].geometry.location
//
//            });
//        } else {
//            alert('Geocode was not successful for the following reason: ' + status);
//        }
//    });
//}

/*

//TODO 現在問題是 在上面的function有用了addr陣列儲存了區域選擇清單後的地址，但是全域問題，沒辦法把這個addr陣列裡的地址放進googlemap裡面，又沒辦法不使用initMap，需要嘗試把新增marker的function放進for迴圈裡面

//TODO嘗試是否不需要用callback initMap 這樣就可以把function都丟在一起

var thisData = data;
                //var thisData = JSON.parse(data);
                //var thisData = jQuery.parseJSON(JSON.stringify(data));

有開放
高雄市立圖書館-分館資訊(沒經緯度 是地址)
http://opendata.khcc.gov.tw/public/OD_ksml_info.ashx

ubike
http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=ddb80380-f1b3-4f8e-8016-7ed9cba571d5

新北市垃圾車所在位置
http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000070-002

jsonp筆記
--http://blog.johnsonlu.org/javascript%E9%80%8F%E9%81%8Ejsonp%E5%AE%8C%E6%88%90%E8%B7%A8%E7%AB%99%E8%AB%8B%E6%B1%82/

&call back 
--https://wcc723.github.io/jquery/2013/11/04/js-json2/
--http://xyz.cinc.biz/2013/02/jquery-jsonp.html

十分鐘雨量圖 
http://opendata.epa.gov.tw/Data/Contents/RainTenMin/

http://opendata.epa.gov.tw/webapi/api/rest/datastore/315070000H-000001?sort=PublishTime&offset=0&limit=1000&callback=?

//確定可以的 
高雄市利托嬰中心 
https://data.kaohsiung.gov.tw/opendata/DownLoad.aspx?Type=2&CaseNo1=AE&CaseNo2=2&FileType=1&Lang=C&FolderType=


還是不行
新北市ubike站
http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000352-001
新北市垃圾車所在位置
http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000070-002

*/
