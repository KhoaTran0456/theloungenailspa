function loadData(pageName) {
	$("#header").load('components/header.html');
	$("#footer").load('components/footer.html', function () {
		$.getJSON('config_data.json', function (cgf) {
			// use for footer
			$("[name=storePhone]").each(function () {
				jQuery(this).html(cgf.info.salon.phone);
			});
			$("[name=storePhone_2]").each(function () {
				jQuery(this).html(cgf.info.salon.p2hone);
			});
			$("[name=storePhone_3]").each(function () {
				jQuery(this).html(cgf.info.salon.p3hone);
			});
			$("[name=storeFullAddress]").each(function () {
				jQuery(this).html(cgf.info.salon.address);
			});
			$("[name=storeFullAddress_2]").each(function () {
				jQuery(this).html(cgf.info.salon.address_2);
			});
			$("[name=storeFullAddress_3]").each(function () {
				jQuery(this).html(cgf.info.salon.address_3);
			});
			$("[name=storeDistrict]").each(function () {
				jQuery(this).html(cgf.info.salon.district);
			});
			$("[name=storeState]").each(function () {
				jQuery(this).html(cgf.info.salon.state);
			});
			$("[name=storeName]").each(function () {
				jQuery(this).html(cgf.info.salon.store);
			});
			$("[name=storeEmail]").each(function () {
				jQuery(this).html(cgf.info.salon.email);
			});

			$("[name=storeWeekdays_1]").each(function () {
				jQuery(this).html(cgf.info.salon.weekdays_1);
			});
			$("[name=storeWeekdays_2]").each(function () {
				jQuery(this).html(cgf.info.salon.weekdays_2);
			});
			$("[name=storeEmail]").each(function () {
				jQuery(this).html(cgf.info.salon.email);
			});

			$("[name=storeTime_1]").each(function () {
				jQuery(this).html(cgf.info.salon.time_1);
			});
			$("[name=storeTime_2]").each(function () {
				jQuery(this).html(cgf.info.salon.time_2);
			});


			// use for NAME OF SALON
			$("#storeNameAndText").html("About " + cgf.info.salon.store);

			$("[data-booking]").attr('href', cgf.info.social.booking);
			$("[data-facebook]").attr('href', cgf.info.social.facebook);
			$("[data-instagram]").attr('href', cgf.info.social.instagram);
			$("[data-google]").attr('href', cgf.info.social.google);
			$("[data-maps]").attr('src', cgf.info.social.maps);
			$("[data-map2s]").attr('src', cgf.info.social.map2s);
			$("[data-map3s]").attr('src', cgf.info.social.map3s);
			$("[data-phone]").attr('href', "tel:" + cgf.info.salon.phone);
			$("[data-p2hone]").attr('href', "tel:" + cgf.info.salon.p2hone);
			$("[data-p3hone]").attr('href', "tel:" + cgf.info.salon.p3hone);
			$("[data-email]").attr('href', "mailto:" + cgf.info.salon.email);

			if (pageName == "INDEX") {
				loadDataForIndex(cgf);
			} else if (pageName == "SERVICES") {
				loadDataForServices(cgf);
			} else if (pageName == "GALLERY") {
				loadDataForGallery(cgf);
			} else if (pageName == "SPECIALTIES") {
				loadDataForSpecialties(cgf);
			} 
		})
			.fail(function () { $('body').empty().append("Error 403: Can't Load Data Website"); })
	});

}






function loadDataForIndex(cgf) {
	// use for SERVICES
	var srtCols = "";

	$.each(cgf.specialties, function (count, spe) {
			
			var strColElement = '<div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.0s">'+
			'                    <div class="team-item">'+
			'                        <div class="team-img">'+
			'                            <img class="w-100" src="IMAGE_SRC"'+
			'                                alt="Elemi Nails & Spa">'+
			'                            <div class="team-social">'+
			'                                <ul class="list-unstyled">'+
			'                                    <li><a data-facebook class="btn btn-success text-white" target="_blank" href="https://www.facebook.com/theloungenailspa.us"><i'+
			'                                                class="fab fa-facebook"></i></a></li>'+
			'                                    <li><a data-instagram class="btn btn-success text-white mt-2" target="_blank" href="https://www.instagram.com/theloungenailspa.us"><i'+
			'                                                class="fab fa-instagram"></i></a></li>'+
			'                                    <li><a data-google class="btn btn-success text-white mt-2" target="_blank" href="https://goo.gl/maps/ekLKgbySB5ujQhKBA"><i'+
			'                                                class="fab fa-google"></i></a></li>'+
			'                                </ul>'+
			'                            </div>'+
			'                        </div>'+
			'                    </div>'+
			'                </div>';
				
			
				
			

			srtCols = srtCols + strColElement.replace('IMAGE_SRC', "./assets/images/" + spe.url);
	});
	$("#loadSpecialties").html(srtCols);


	// use for SERVICES
	var srtCols = "";
	$.each(cgf.categories, function (count, cat) {
		if (cat.home == true) {
			
			var strColElement = '<div class="col-lg-3 col-md-6 all des">' +
				'                                <div class="product-item">' +
				'                                    <a href="services.html">' +
				'                                        <img src="CAT_SRC" alt="Salon name 02"></a>' +
				'                                    <div class="down-content">' +
				'                                        <a href="services.html">' +
				'                                            <h4>CAT_NAME</h4>' +
				'                                        </a>' +
				'                                    </div>' +
				'                                </div>' +
				'                            </div>';

			srtCols = srtCols + strColElement.replace('CAT_SRC', "./assets/images/" + cat.src).replace('CAT_NAME', cat.name);
		}
	});
	$("#servicesOfCate").html(srtCols);
}

function loadDataForServices(cgf) {


	var srtCols = "";
	
	$.each(cgf.categories, function (count, cat) {
		var strColElement = '<div data-aos="fade-up" data-aos-delay="600" class="row">'+
		'                <div class="col-md-3 border-right-img">'+
		'                    <img class="w-100" src="CAT_SRC" alt="Village Nail Bar">'+
		''+
		'                </div>'+
		'                <div class="col-md-9">'+
		'                    <div class="row">'+
		'                        <div class="row mt-3 ml-3 mt-md-0">'+
		'                            <div class="title-big">CAT_NAME</div>'+
		'                        </div>'+
		'                    </div>'+
		'                    <div class="row mt-md-3">'+
		'                        <div class="pr-4 col-md-6 mt-md-0 mb-md-0 border-right">SRV_LEFT</div>'+
		'                        <div class="pr-4 col-md-6 mt-md-0">SRV_RIGHT</div>'+
		'                    </div>'+
		'                </div>'+
		'            </div>'+
		'            <div class="line-dash"></div>';
			
		
			
		



		srtCols = srtCols + strColElement.replace('CAT_SRC', "./assets/images/" + cat.src).replace('CAT_NAME', cat.name);

		var strServices = "";
		var strServiceRight = "";
		var countCat = 0;
		$.each(cgf.services, function (count1, srv) {
			var strServiceElement = '<div class="title-small row">'+
			'                                <div class="col-9 col-md-8 col-lg-9">SERVICE_NAME</div>'+
			'                                <div class="col-3 col-md-4 col-lg-3 color-price">SERVICE_PRICE</div>'+
			'                            </div>';
				
			



			if (srv.category == cat.name) {
				countCat ++;
				if (countCat % 2 == 1) {
					strServices = strServices + strServiceElement.replace('SERVICE_NAME', srv.name).replace('SERVICE_PRICE', "$" + srv.price + (srv.plus ? "+" : ""));
				} else {
					strServiceRight = strServiceRight + strServiceElement.replace('SERVICE_NAME', srv.name).replace('SERVICE_PRICE', "$" + srv.price + (srv.plus ? "+" : ""));
				}
			}
		});
		srtCols = srtCols.replace('SRV_LEFT', strServices);
		srtCols = srtCols.replace('SRV_RIGHT', strServiceRight);
	});
	$("#servicesOfCate").html(srtCols);

}
function loadDataForGallery(cgf) {

	// use for SERVICES
	var srtCols = "";

	$.each(cgf.gallery, function (count, gal) {
			
			var strColElement = '<div class="col-md-4 mb-4">'+
			'                  <div class="thumbnail">'+
			'                    <a href="IMAGE_SRC">'+
			'                      <img src="IMAGE_SRC" alt="Salon name 02" style="width:100%">'+
			'                    </a>'+
			'                  </div>'+
			'                </div>';
				
			

			srtCols = srtCols + strColElement.replace('IMAGE_SRC', "./assets/images/" + gal.url).replace('IMAGE_SRC', "./assets/images/" + gal.url);
	});
	$("#loadGallery").html(srtCols);
}

function loadDataForSpecialties(cgf) {

	// use for SERVICES
	var srtCols = "";

	$.each(cgf.specialties, function (count, spe) {
			
			var strColElement = '<div class="col-md-4">'+
			'                <div class="card m-4 product-wap rounded-0">'+
			'                    <div class="card rounded-0 no-border">'+
			'                        <img class="card-img rounded-0 img-fluid"'+
			'                            src="IMAGE_SRC">'+
			'                        <div'+
			'                            class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">'+
			'                            <ul class="list-unstyled">'+
			'                                <li><a class="btn btn-success text-white" target="_blank"'+
			'                                        href="https://www.facebook.com/theloungenailspa.us"><i'+
			'                                            class="fab fa-facebook"></i></a></li>'+
			'                                <li><a class="btn btn-success text-white mt-2" target="_blank"'+
			'                                        href="https://www.instagram.com/theloungenailspa.us"><i'+
			'                                            class="fab fa-instagram"></i></a></li>'+
			'                                <li><a class="btn btn-success text-white mt-2" target="_blank"'+
			'                                        href="https://goo.gl/maps/ekLKgbySB5ujQhKBA" data-google><i class="fab fa-google"></i></a>'+
			'                                </li>'+
			'                            </ul>'+
			'                        </div>'+
			'                    </div>'+
			'                </div>'+
			'            </div>';
				
			
				
			

			srtCols = srtCols + strColElement.replace('IMAGE_SRC', "./assets/images/" + spe.url).replace('IMAGE_SRC', "./assets/images/" + spe.url);
	});
	$("#loadSpecialties").html(srtCols);
}









