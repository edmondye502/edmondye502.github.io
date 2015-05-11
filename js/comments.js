// comments.js

function validateCommentSection()
{
	var cFormObj = documents.getElementById("commentsForm");
	var name = cFormObj.name.value;
	var comments = cFormObj.comments.value;
	var everythingOK = true;

	if (!validateName(name))
    {
        alert("Invalid Name!");
        everythingOK = false;
    }
    if (!validateComments(comments))
    {
        alert("Your comment is empty!");
        everythingOK = false;
    }

    if (everythingOK)
    {
    	alert("Thank you, your comment has been received!");
    }
    return everythingOK;
}

function validateName(name)
{
    var p = name.search(/^[-'\w\s]+$/);
    if (p == 0)
    {
        return true;
    }
    return false;
}

function validateComments(comments)
{
    if(comments == '')
	{
	    return false;
	}
	return truel
}