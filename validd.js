function validateName()
{
	var name=document.getElementById("fname").value;
	
	if(fname.length==0)
	{
		showMessage(" Input Your Name","errorName","red");
		return false;	
	}
	else if(fname.length<2)
	{
		showMessage(" Character length Not Enough","errorName","orange");
		return false;
	}
	else if(!name.match(/^[A-Za-z]{2,30}\s{1}[A-Za-z]{3,30}/))
	{
		showMessage("Input Last Name","errorName","red");
		return false;
	}
	else
	{
		showMessage(" Name is Valid","errorName","green")
		return true;
	}
}

// function jsShow(id)
// {
// 	document.getElementById(id).style.display="block";
// }
// function jsHide(id)
// {

// 	document.getElementById(id).style.display="none";
// }



function showMessage(message,location,color)
{
	document.getElementById(location).innerHTML=message;
	document.getElementById(location).style.color=color;
	
}