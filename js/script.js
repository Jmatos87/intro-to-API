console.log([$])
console.log('hello world')


var apiKey = 'cb5edb6b1b7d4a7c85169374e621c36d'

var baseURl = 'http://openstates.org/api/v1/legislators/?state=tx&apikey='

var fullURL = baseURl + apiKey

$.getJSON(fullURL)

var congressionalPromise = $.getJSON(fullURL)

var legislatorToHTML = function (legislatorObject){
	var newString = '<div class= "legislatorContainer"><img src ="' + legislatorObject.photo_url + '">'
	if(legislatorObject.party===undefined){
			 legislatorObject.party = "I swear allegiance to no man!"
		}
	newString += '<p class="legislatorName">' + legislatorObject.full_name + '</p>'
	newString += '<p class="legislatorParty">' + legislatorObject.party + ' - ' + legislatorObject.state.toUpperCase () +'</p>'
	newString += '<ul id="listLength"><li><p class="legislatorEmail">My e-mail is very private and secure.</p></li>' 
	newString += '<li><a class="legislatorUrl" href=' + legislatorObject.url + '>Click here for a better looking site</a></li></ul></div>' 
	// newString += '<p class="legislatorPhone">' + legislatorObject.offices[0].phone + '</p></div>'



	return newString


}

var handleData = function (resultArray) {
	var htmlString = ''
	for(var i = 0; i <resultArray.length; i++){

		var legislatorObject = resultArray[i]
		htmlString += legislatorToHTML(legislatorObject)

	}
	var containerEl = document.querySelector('#container')
	containerEl.innerHTML = htmlString
}
console.log(congressionalPromise)
congressionalPromise.then(handleData)







