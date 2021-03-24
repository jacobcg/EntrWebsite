/*tweet = retrieveTweet();

// API KEY - QeTb3e05EAFH6HBtcrquI271v
export CONSUMER_KEY='QeTb3e05EAFH6HBtcrquI271v';

// API SECRET KEY - tt6CvIZcCL6dOi5eLefgvlEYv20lp3NemCdBasqQgxmEMjUMsx
export CONSUMER_SECRET='tt6CvIZcCL6dOi5eLefgvlEYv20lp3NemCdBasqQgxmEMjUMsx';
// BEARER TOKEN - AAAAAAAAAAAAAAAAAAAAAM%2B2NwEAAAAATKMqCkeUig4JuujyEMfa6n%2FFvEM%3D0CrvVAv4ggin0sAvSSHWDXNBNTsK02JudWvKGwR0jPjn870zvZ

//ACCESS TOKEN - AAAAAAAAAAAAAAAAAAAAAM%2B2NwEAAAAATKMqCkeUig4JuujyEMfa6n%2FFvEM%3D0CrvVAv4ggin0sAvSSHWDXNBNTsK02JudWvKGwR0jPjn870zvZ

//ACCESS TOKEN SECRET - aQORkj2nsBr7xSmIXVdiPlwDMxo4M15pi3M4V6vxpVQ04*/


document.addEventListener("DOMContentLoaded", function() {
    const inputBar = document.querySelector('#judgeInput');
    
    
    document.querySelector('#judgeButton').addEventListener('click', function() {
        
        document.querySelector('#theJudged').innerHTML = '';
        
        const imageOfPerson = document.createElement('img');
        const nameOfPerson = document.createElement('h3');
        const followerCount = document.createElement('h3');
        const goodOrBad = document.createElement('img');
        
        //Creating name of person
        nameInput = document.querySelector('#judgeInput').value.toLowerCase();
        
        if (namInput == 'stuff') {
            
        }
        
        nameOfPerson.textContent = "Name: " + nameInput;
        
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