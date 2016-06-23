//Uncomment lines bellow to check if it works

//Final 1 line of code
//qq.get('container').contain().addEvent('click', 'console.log("clicked")').form('font-size: 10px;')

//Final styles with different conditions applied
// var rainbowsAndSunshine = 'color: cyan; font-size: 20px; line-height: 1.5; border: 5px solid black;'
// qq.get('container').contain().addEvent('click', 'console.log("za container iz clicked")').form(rainbowsAndSunshine)
// qq.get('cube').contain().addEvent('click', 'console.log("das ist cube")').form(rainbowsAndSunshine)

//Let's come on

//Because old styles are bad styles
//resetAll()

//Let's make them blue-ish
//form('container', 'color: cyan')

//Or let's wire up and event
//addEvent('cube', 'click', 'console.log("it is alive")')

//Sometimes we want items to be in containers
//contain('cube')

//Ok, single methods are cool and all, but I don't want to write that much! Let's chain methods
//qq.get('container').contain().addEvent('click', 'console.log("das ist container or box, I do not know")').form('color: cyan;')

//Let's examine the competition
//jquery
//$( "#myDiv" ).css( "border", "3px solid red" ); -- Notice the # for selection and 2 strings for styling
//qq.get('myDiv').form('border: 3px solid red'); -- No Id sign needed. It knows and 1 string for all styles. 
//I think we see who wins here. BTW. method names could be shorter, but the idea is to make styling like you would write a poem.
console.log('ququ-cs is loaded')