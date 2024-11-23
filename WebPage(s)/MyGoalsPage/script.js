$(document).ready(function() {
    let goals = [
        {
            title: "Making Games",
            description: "My primary goal is to create my own Game, even during my First Year in College. I do wish to make and publish a Game on either PC or Android. Currently, my first goal and project when it comes to making a new Game is a 2D Shooter for Android, almost similar to other Flash Games or Stickman Battlefield, which unfortunately, does not exist anymore on Google Play. Maybe in the future, I can finally make the game I've been wanting to make. I also want to incorporate my business and marketing skills with my strategies when it comes to advertisements or marketing my Games. Maybe I could earn some extra income from my Games through Advertisements without ruining the gaming experience of my players, ensuring that the advertisements or the in-app purchases are as minimal as possible.",
            background: "url('Material(s)/MyGoals.png')"
        },
        {
            title: "Make Software Applications",
            description: "Not only do I want to make Games, but also applications, especially tools that can help me in my photo, video, and audio editing. Even apps that can be useful or helpful to other people, especially apps for Android. Actually, one of my goals when it comes to Software application is making an All-in-One Photo, Video, and Audio Editing Tool, from converting MP4 to MP3 or other formats, quality compressions, or even increasing the audio's volume, pretty much everything. All in one app. Again, I also want to incorporate my business skills into my Apps. Though I have a lot of plans in mind when it comes to earning some income from my apps, I believe I should keep them to myself.",
            background: "url('Material(s)/MyGoals2.png')"
        },
        {
            title: "Be Popular in YouTube",
            description: "It has always been my passion to make content on YouTube, from Tutorials, Music, Gameplays, and other things that I want to share. One of my goals is to reach a lot of Subscribers and Views on every Video I make, so that in the future, I can use it as my platform to market or showcase my Games and Applications too.",
            background: "url('Material(s)/MyGoals3.png')"
        },
        {
            title: "Have a Developer Team",
            description: "In the future, I'd like to have a Team—a band of people who also want to make games similar to my preferences and applications that are useful and could help a lot of people. I'm hoping that I could form a good team in the future, so that we could all achieve our goals of making good games and applications.",
            background: "url('Material(s)/MyGoals4.png')"
        },
        {
            title: "Have my own DGroup",
            description: "In my Youth Church, \"Elevate\", we have this thing called DGroup. It's a group of people helping and socializing with one another, almost like our safe space, to share our thoughts, feelings, and stories. Each DGroup is specific: boys for boys, and girls for girls. All the members in DGroups usually come together and have Bible studies, pray with one another, and even help each other when they are down. Unfortunately, I have been a member for a very long time, and almost all of my members in my DGroup have become DGroup Leaders already. I wish to become one. I'd also want to teach the Bible to my fellow DGroup Members. I do hope that in the Future, I can finally have my own DGroup.",
            background: "url('Material(s)/MyGoals5.png')"
        },
        {
            title: "To be a Christian Missionary accross the World",
            description: "I'd like to travel to other countries and spread the Gospel, especially to those who don't know the Lord yet. I'd like to establish new churches in areas that have tribes or provinces. However, for now, I want to start my Journey in the Philippines first, by traveling to areas in Luzon, Visayas, and even Mindanao, sharing the Word of God. Regardless of my safety or my life, I will still continue the Lord's command, which is in Mark 16:15-16, \'He said to them, \"Go into all the world and preach the gospel to all creation. Whoever believes and is baptized will be saved, but whoever does not believe will be condemned.\'\"",
            background: "url('Material(s)/MyGoals6.png')"
        },
        {
            title: "Establish Orphanages",
            description: "I do believe that through children, we can make a better place, or even a better World. However, in order to do that, we must educate and help these children grow into the better version of themselves, teaching them how to be Christlike, especially children who do not have any parents or are abandoned. I have a big heart for taking care of children. Although I may look intimidating or not that expressive, I really love children and want to protect them at all costs, for they are our future. Without them, our world will never be a better place. Where will we find our future workers, employees, employers, bosses, politicians, engineers, game developers, programmers, or teachers? Through these children. Therefore, it is my goal to establish as many Orphanages as long as I live, so that when I'm gone, I will pass all my teachings, beliefs, and legacy to them. This is considered my final goal in Life, hoping I can fulfill it.",
            background: "url('Material(s)/MyGoals7.png')"
        }
    ];

    let currentGoalIndex = 0;

    function preloadImages(array) {
        if (!preloadImages.list) {
            preloadImages.list = [];
        }
        let list = preloadImages.list;
        for (let i = 0; i < array.length; i++) {
            let img = new Image();
            img.onload = function() {
                let index = list.indexOf(this);
                if (index !== -1) {
                    list.splice(index, 1);
                }
            }
            list.push(img);
            img.src = array[i];
        }
    }

    preloadImages(['Material(s)/MyGoals.png', 'Material(s)/MyGoals2.png', 'Material(s)/MyGoals3.png', 'Material(s)/MyGoals4.png', 'Material(s)/MyGoals5.png', 'Material(s)/MyGoals6.png', 'Material(s)/MyGoals7.png']);

    function updateGoal() {
        $('.title-wrapper, .description-wrapper, .arrow').css('opacity', 0);
        setTimeout(function() {
            $('.title').text(goals[currentGoalIndex].title).css('opacity', 1);
            $('.description').text(goals[currentGoalIndex].description).css('opacity', 1);
            $('body').css('background-image', goals[currentGoalIndex].background);
            $('.title-wrapper, .description-wrapper, .arrow').css('opacity', 1);
        }, 500);  // Adding a delay to ensure the image has time to load
    }

    $('.arrow.left').click(function() {
        currentGoalIndex = (currentGoalIndex > 0) ? currentGoalIndex - 1 : goals.length - 1;
        updateGoal();
    });

    $('.arrow.right').click(function() {
        currentGoalIndex = (currentGoalIndex < goals.length - 1) ? currentGoalIndex + 1 : 0;
        updateGoal();
    });

    updateGoal();
});
