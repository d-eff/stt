var price = 0;
var titleSearch = 0;
var lienSearch = 0;
var totalFees = 0;
var ownersPolicy = 0;
var closingFee = 0;

function calcSellersPolicy()
{
	if(isNaN(document.sellerCalc.price.value))
	{
		alert("Please enter a sale price with only numbers.");
		document.sellerCalc.price.focus();
		return false;
	}
	if(document.sellerCalc.price.value <= 0)
	{
		alert("Please enter a sale price higher than 0.");
		document.sellerCalc.price.focus();
		return false;
	}

	totalFees = 0;
	price = parseFloat(document.sellerCalc.price.value);
	closingFee = parseFloat(document.sellerCalc.closingFee.value);
	titleSearch = parseFloat(document.sellerCalc.titleSearch.value);
	lienSearch = parseFloat(document.sellerCalc.lienSearch.value);
	
	if(price > 10000000)
	{
		ownersPolicy = (((price - 10000000)/1000) * 2) + 26325;
	}
	else if((price > 5000000) && (price <= 10000000))
	{
		ownersPolicy = (((price - 5000000)/1000) * 2.25) + 15075;
	}
	else if((price > 1000000) && (price <= 5000000))
	{
		ownersPolicy = (((price - 1000000)/1000) * 2.5) + 5075;
	}
	else if((price > 100000) && (price <= 1000000))
	{
		ownersPolicy = (((price - 100000)/1000) * 5) + 575;
	}
	else
	{
		ownersPolicy = (price/1000) * 5.75;
	}

	if(ownersPolicy <= 100)
	{
		ownersPolicy = 100;
	}

	totalFees = ownersPolicy + titleSearch + lienSearch + closingFee;
	document.sellerCalc.ownersPolicy.value = Math.round((ownersPolicy + 0.00001) * 100) / 100;
	document.sellerCalc.totalFees.value = Math.round((totalFees + 0.00001) * 100) / 100;
}
