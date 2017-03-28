$(function () {

    // bool for scroll function(only run 1 time)
    var a = true;

    //搜尋區
    $('.search').on('click', function (e) {

        //creat District map
        map = new google.maps.Map(document.getElementById('map'), {
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
            url: 'http://opendata.khcc.gov.tw/public/OD_ksml_info.ashx',
            success: function (data) {

                var dis = $('#dis').val();

                //var thisData = JSON.parse(data);
                var thisData = jQuery.parseJSON(JSON.stringify(data));

                $('.result').html('');

                //search
                for (i = 0; thisData.length > i; i++) {

                    name = thisData[i].Title;

                    if (thisData[i].Address.indexOf(dis) > -1) {
                        str = '<h4><i class="fa fa-home" aria-hidden="true"></i>' + thisData[i].Title + '</h4>' +
                            '<p><i class="fa fa-map-marker" aria-hidden="true"></i>' + thisData[i].Address + '</p>' +
                            '<p><i class="fa fa-phone" aria-hidden="true"></i>' + thisData[i].Tel + '</p>' +
                            '<p><i class="fa fa-clock-o" aria-hidden="true"></i>' + thisData[i].OpenTime + '</p><hr>';
                        $('.result').append(str);

                        geocodeAddress(geocoder, map);

                        function geocodeAddress(geocoder, resultsMap) {

                            var address = thisData[i].Address;

                            geocoder.geocode({
                                'address': address
                            }, function (results, status) {
                                if (status === google.maps.GeocoderStatus.OK) {

                                    resultsMap.setCenter(results[0].geometry.location);

                                    var marker = new google.maps.Marker({
                                        map: resultsMap,
                                        position: results[0].geometry.location
                                    });
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

    //下雨區
    $('#drop').on('click', function (e) {

        //create allmap
        allmap = new google.maps.Map(document.getElementById('allmap'), {
            zoom: 11,
            center: {
                lat: 22.755718,
                lng: 120.447436
            }
        });

        var neighborhoods = [
            {
                lat: 22.6102344,
                lng: 120.30174320000003
            },
            {
                lat: 22.625524,
                lng: 120.29801700000007
            },
            {
                lat: 22.6544722,
                lng: 120.27538600000003
            },
            {
                lat: 22.612094,
                lng: 120.270848
            },
            {
                lat: 22.7152924,
                lng: 120.29017169999997
            },
            {
                lat: 22.6733397,
                lng: 120.28586270000005
            },
            {
                lat: 22.646393,
                lng: 120.30613700000004
            },
            {
                lat: 22.6310222,
                lng: 120.30989269999998
            },
            {
                lat: 22.6272175,
                lng: 120.30684289999999
            },
            {
                lat: 22.6267091,
                lng: 120.28185329999997
            },
            {
                lat: 22.602476,
                lng: 120.33300499999996
            },
            {
                lat: 22.649382,
                lng: 120.32496949999995
            },
            {
                lat: 22.623302,
                lng: 120.27304660000004
            },
            {
                lat: 22.6185494,
                lng: 120.29819659999998
            },
            {
                lat: 22.7267707,
                lng: 120.30298500000004
            },
            {
                lat: 22.643485,
                lng: 120.34231999999997
            },
            {
                lat: 22.7334902,
                lng: 120.32788260000007
            },
            {
                lat: 22.6784039,
                lng: 120.307816
            },
            {
                lat: 22.5605891,
                lng: 120.37057579999998
            },
            {
                lat: 22.6257981,
                lng: 120.31813999999997
            },
            {
                lat: 22.797164,
                lng: 120.29287999999997
            },
            {
                lat: 22.7832758,
                lng: 120.29827090000003
            },
            {
                lat: 22.79337,
                lng: 120.36208690000001
            },
            {
                lat: 22.7571744,
                lng: 120.30523549999998
            },
            {
                lat: 22.760493,
                lng: 120.26696219999997
            },
            {
                lat: 22.7627019,
                lng: 120.24460499999998
            },
            {
                lat: 22.7854904,
                lng: 120.2464377
            },
            {
                lat: 22.8159528,
                lng: 120.22440030000007
            },
            {
                lat: 22.9061936,
                lng: 120.18048950000002
            },
            {
                lat: 22.855732,
                lng: 120.258375
            },
            {
                lat: 22.9065626,
                lng: 120.22347330000002
            },
            {
                lat: 22.8797259,
                lng: 120.33327540000005
            },
            {
                lat: 22.8719806,
                lng: 120.35943580000003
            },
            {
                lat: 22.5966662,
                lng: 120.3542215
            },
            {
                lat: 22.5894331,
                lng: 120.32732910000004
            },
            {
                lat: 22.627077,
                lng: 120.35717199999999
            },
            {
                lat: 22.6247642,
                lng: 120.36343549999992
            },
            {
                lat: 22.6911944,
                lng: 120.43093550000003
            },
            {
                lat: 22.6576795,
                lng: 120.41753340000002
            },
            {
                lat: 22.7292785,
                lng: 120.44386800000007
            },
            {
                lat: 22.7014802,
                lng: 120.34790240000007
            },
            {
                lat: 22.6803194,
                lng: 120.34467689999997
            },
            {
                lat: 22.7317397,
                lng: 120.34730439999998
            },
            {
                lat: 22.6623284,
                lng: 120.36251560000005
            },
            {
                lat: 22.6041588,
                lng: 120.39340979999997
            },
            {
                lat: 22.637313,
                lng: 120.40208440000004
            },
            {
                lat: 22.5088476,
                lng: 120.39479540000002
            },
            {
                lat: 22.487031,
                lng: 120.39497059999997
            },
            {
                lat: 22.888642,
                lng: 120.48349000000007
            },
            {
                lat: 22.9001721,
                lng: 120.54186070000003
            },
            {
                lat: 23.083777,
                lng: 120.58771649999994
            },
            {
                lat: 22.917091,
                lng: 120.45522000000005
            },
            {
                lat: 22.936826,
                lng: 120.46179890000008
            },
            {
                lat: 22.9753469,
                lng: 120.46780460000002
            },
            {
                lat: 22.9816879,
                lng: 120.49986650000005
            },
            {
                lat: 22.9743924,
                lng: 120.54160139999999
            },
            {
                lat: 22.9962618,
                lng: 120.63471959999993
            },
            {
                lat: 22.7397261,
                lng: 120.2498349
            },
            {
                lat: 22.5830043,
                lng: 120.31971210000006
            },
            {
                lat: 22.6633972,
                lng: 120.31557429999998
            }
        ];

        var allmarkers = [];

        drop();

        function drop() {
            clearMarkers();
            for (var i = 0; i < neighborhoods.length; i++) {
                addMarkerWithTimeout(neighborhoods[i], i * 100);
            }
        }

        function addMarkerWithTimeout(position, timeout) {
            window.setTimeout(function () {
                allmarkers.push(new google.maps.Marker({
                    position: position,
                    map: allmap,
                    animation: google.maps.Animation.DROP
                }));
            }, timeout);
        }

        function clearMarkers() {
            for (var i = 0; i < allmarkers.length; i++) {
                allmarkers[i].setMap(null);
            }
            allmarkers = [];
        }

    }); // end of drop click function

    //在我附近區
    $(window).scroll(function () {
        if ((document.body.scrollTop > 2266) && (a == true)) {
            a = false;
            //執行初始化定義selfmap

            //Create SelfMap
            var selfmap = new google.maps.Map(document.getElementById('selfmap'), {
                center: {
                    lat: 22.6102344,
                    lng: 120.30174320000003
                },
                zoom: 15
            });

            //Define SelfMap
            initSelfMap();

            //Create SelfMap
            function initSelfMap() {

                //設定中心.級數
                var selfmap = new google.maps.Map(document.getElementById('selfmap'), {
                    center: {
                        lat: 22.6102344,
                        lng: 120.30174320000003
                    },
                    zoom: 8
                });

                //Define infoWindow
                var infoWindow = new google.maps.InfoWindow({
                    map: selfmap
                });

                //Define selfgeocoder
                var selfgeocoder = new google.maps.Geocoder();

                // geolocation
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        var pos = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };

                        infoWindow.setPosition(pos);
                        infoWindow.setContent('Hi!I am here!');
                        selfmap.setCenter(pos);
                    }, function () {
                        handleLocationError(true, infoWindow, map.getCenter());
                    });
                } else {
                    // Browser doesn't support Geolocation
                    handleLocationError(false, infoWindow, map.getCenter());
                } // end of geolocation error else

                //start adding markers

                var locations = [
            {
                lat: 22.6102344,
                lng: 120.30174320000003
            },
            {
                lat: 22.625524,
                lng: 120.29801700000007
            },
            {
                lat: 22.6544722,
                lng: 120.27538600000003
            },
            {
                lat: 22.612094,
                lng: 120.270848
            },
            {
                lat: 22.7152924,
                lng: 120.29017169999997
            },
            {
                lat: 22.6733397,
                lng: 120.28586270000005
            },
            {
                lat: 22.646393,
                lng: 120.30613700000004
            },
            {
                lat: 22.6310222,
                lng: 120.30989269999998
            },
            {
                lat: 22.6272175,
                lng: 120.30684289999999
            },
            {
                lat: 22.6267091,
                lng: 120.28185329999997
            },
            {
                lat: 22.602476,
                lng: 120.33300499999996
            },
            {
                lat: 22.649382,
                lng: 120.32496949999995
            },
            {
                lat: 22.623302,
                lng: 120.27304660000004
            },
            {
                lat: 22.6185494,
                lng: 120.29819659999998
            },
            {
                lat: 22.7267707,
                lng: 120.30298500000004
            },
            {
                lat: 22.643485,
                lng: 120.34231999999997
            },
            {
                lat: 22.7334902,
                lng: 120.32788260000007
            },
            {
                lat: 22.6784039,
                lng: 120.307816
            },
            {
                lat: 22.5605891,
                lng: 120.37057579999998
            },
            {
                lat: 22.6257981,
                lng: 120.31813999999997
            },
            {
                lat: 22.797164,
                lng: 120.29287999999997
            },
            {
                lat: 22.7832758,
                lng: 120.29827090000003
            },
            {
                lat: 22.79337,
                lng: 120.36208690000001
            },
            {
                lat: 22.7571744,
                lng: 120.30523549999998
            },
            {
                lat: 22.760493,
                lng: 120.26696219999997
            },
            {
                lat: 22.7627019,
                lng: 120.24460499999998
            },
            {
                lat: 22.7854904,
                lng: 120.2464377
            },
            {
                lat: 22.8159528,
                lng: 120.22440030000007
            },
            {
                lat: 22.9061936,
                lng: 120.18048950000002
            },
            {
                lat: 22.855732,
                lng: 120.258375
            },
            {
                lat: 22.9065626,
                lng: 120.22347330000002
            },
            {
                lat: 22.8797259,
                lng: 120.33327540000005
            },
            {
                lat: 22.8719806,
                lng: 120.35943580000003
            },
            {
                lat: 22.5966662,
                lng: 120.3542215
            },
            {
                lat: 22.5894331,
                lng: 120.32732910000004
            },
            {
                lat: 22.627077,
                lng: 120.35717199999999
            },
            {
                lat: 22.6247642,
                lng: 120.36343549999992
            },
            {
                lat: 22.6911944,
                lng: 120.43093550000003
            },
            {
                lat: 22.6576795,
                lng: 120.41753340000002
            },
            {
                lat: 22.7292785,
                lng: 120.44386800000007
            },
            {
                lat: 22.7014802,
                lng: 120.34790240000007
            },
            {
                lat: 22.6803194,
                lng: 120.34467689999997
            },
            {
                lat: 22.7317397,
                lng: 120.34730439999998
            },
            {
                lat: 22.6623284,
                lng: 120.36251560000005
            },
            {
                lat: 22.6041588,
                lng: 120.39340979999997
            },
            {
                lat: 22.637313,
                lng: 120.40208440000004
            },
            {
                lat: 22.5088476,
                lng: 120.39479540000002
            },
            {
                lat: 22.487031,
                lng: 120.39497059999997
            },
            {
                lat: 22.888642,
                lng: 120.48349000000007
            },
            {
                lat: 22.9001721,
                lng: 120.54186070000003
            },
            {
                lat: 23.083777,
                lng: 120.58771649999994
            },
            {
                lat: 22.917091,
                lng: 120.45522000000005
            },
            {
                lat: 22.936826,
                lng: 120.46179890000008
            },
            {
                lat: 22.9753469,
                lng: 120.46780460000002
            },
            {
                lat: 22.9816879,
                lng: 120.49986650000005
            },
            {
                lat: 22.9743924,
                lng: 120.54160139999999
            },
            {
                lat: 22.9962618,
                lng: 120.63471959999993
            },
            {
                lat: 22.7397261,
                lng: 120.2498349
            },
            {
                lat: 22.5830043,
                lng: 120.31971210000006
            },
            {
                lat: 22.6633972,
                lng: 120.31557429999998
            }
        ];

                var selfmarkers = [];
                var k;

                addselfmarkers();

                function addselfmarkers() {
                    for (var i = 0; i < locations.length; i++) {
                        selfmarkers.push(new google.maps.Marker({
                            position: locations[i],
                            map: selfmap,
                        }));
                    } // end of for
                } // end of addselfmarkers
            } // end of initSelfMap
        } // end of scrool if true action
    }); // end of scroll function

    //超連結滾動區
    $('.scrolltodistrict').click(function (e) {
        $('html,body').animate({
            scrollTop: $('#location').offset().top
        }, 800);
        e.preventDefault();
    });

    $('.scrolltoall').click(function (e) {
        $('html,body').animate({
            scrollTop: $('#all').offset().top
        }, 800);
        e.preventDefault();
    });

    $('.scrolltoself').click(function (e) {
        $('html,body').animate({
            scrollTop: $('#self').offset().top
        }, 800);
        e.preventDefault();
    });




}); // end of page load function



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
