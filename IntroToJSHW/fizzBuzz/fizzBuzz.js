for(var i = 1; i < 101; i++)
{
	var threeMultiple = i % 3 === 0;
	var fiveMultiple = i % 5 === 0;
	if(threeMultiple && fiveMultiple)
	{
		console.log(i + " FizzBuzz");
	}
	else if(threeMultiple)
	{
		console.log(i + " Fizz");
	}
	else if(fiveMultiple)
	{
		console.log(i + " Buzz");
	}
}