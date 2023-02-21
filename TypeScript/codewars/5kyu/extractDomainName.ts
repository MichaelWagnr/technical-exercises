// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// url = "https://www.cnet.com"                -> domain name = cnet"

// pass //

function domainName(url: string) {
	const result = /(?:http:\/\/|https:\/\/)?(?:www.)?(.*?)(?=\.)/.exec(url)!
	return result[1]
}

// solution //

// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };