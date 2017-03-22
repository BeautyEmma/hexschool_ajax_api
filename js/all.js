$(function () {
    var test = 'Test if Append works';
    $('.wrap').append(test);
    $.ajax({
        type: 'GET',
        url: 'data.json',
        async: true,
        dataType: 'json',
        success: function (data) {

            console.log('Load data Success, and the Type of data is : ' + typeof (data));

            for (i = 0; data.length > i; i++) {

                var thisData = data;
                var str;
                var free = thisData[i].sarea;

                if (free == '信義區') {
                    str = '<li>' + thisData[i].iid + '</li>';
                    $('body').append(str);
                }
            } //end of for
            console.log('End of for');
        } //end of success
    });

});

/*

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
