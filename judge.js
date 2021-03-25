
document.addEventListener("DOMContentLoaded", function() {
    const inputBar = document.querySelector('#judgeInput');
    
    
    document.querySelector('#judgeButton').addEventListener('click', function() {
        
        document.querySelector('#theJudged').innerHTML = '';
        
        const imageOfPerson = document.createElement('img');
        const nameOfPerson = document.createElement('h3');
        const followerCount = document.createElement('h3');
        const goodOrBad = document.createElement('img');
        
       
        
        //Creating name of person
        nameInput = document.querySelector('#judgeInput').value
        
        nameOfPerson.textContent = "Name: " + nameInput;
        
        nameInput = nameInput.replace(/\s/g, "").toLowerCase();
        
        //Setting image
        imageOfPerson.setAttribute('src', `./images/${nameInput}.jpg`);
        
        //Checking to see if they guilty
        followers = Math.floor(Math.random() * 1000000);
        
        if(followers > 500000)
            goodOrBad.setAttribute('src', `./thumbs/thumbsUp.png`);
        else
            goodOrBad.setAttribute('src', `./thumbs/thumbsDown.png`);
        
        //Doing follower count stuff
        followerCount.textContent = "Follower Count: " + followers;
        
        
        
        //Appending Elements
        document.querySelector('#theJudged').appendChild(imageOfPerson);
        document.querySelector('#theJudged').appendChild(nameOfPerson);
        document.querySelector('#theJudged').appendChild(followerCount);
        document.querySelector('#theJudged').appendChild(goodOrBad);
        
        
    });
});