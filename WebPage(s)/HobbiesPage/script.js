$(document).ready(function() {
    // Preload background images
    var backgrounds = [
        'Material(s)/Background.jpg',
        'Material(s)/Background1.jpg',
        'Material(s)/Background2.jpg',
        'Material(s)/Background3.jpg',
        'Material(s)/Background4.jpg',
        'Material(s)/Background5.jpg',
        'Material(s)/Background.jpg'
    ];
    var currentBackgroundIndex = 0;

    function preloadImages(urls, callback) {
        var loaded = 0;
        var images = [];
        urls.forEach(function(url, index) {
            images[index] = new Image();
            images[index].src = url;
            images[index].onload = function() {
                loaded++;
                if (loaded === urls.length && callback) {
                    callback();
                }
            };
            images[index].onerror = function() {
                loaded++;
                if (loaded === urls.length && callback) {
                    callback();
                }
            };
        });
    }

    function nextBackground() {
        currentBackgroundIndex++;
        currentBackgroundIndex = currentBackgroundIndex % backgrounds.length;
        $('body').css('background-image', 'url(' + backgrounds[currentBackgroundIndex] + ')');
    }

    preloadImages(backgrounds, function() {
        setInterval(nextBackground, 10000); // Change background every 10 seconds
    });

    // Initialize the first background
    $('body').css('background-image', 'url(' + backgrounds[0] + ')');

    // Handle hobby transitions
    let currentIndex = 0;
    const hobbies = [
        { title: "Programming", description: "I was once inspired to be an accountant; however, programming/coding never left my heart. Time after time, I still wanted to learn more about how programming works and why. I also tried watching videos, tutorials, and guides to learn more about it. It became my hobby once I got a new laptop. I practice every day to enhance my skills in programming, hoping that one day I can become a professional game/web/software developer.", image: "Material(s)/Hobbies1.jpg" },
        { title: "Gaming", description: "Playing games has been a part of my life since I was a kid, from playing with toys to my first Gameboy, and eventually having my own Android phone and laptop. It made me more interested in the details of games, from the characters, plot, map, settings, resources, assets, and even the whole game files themselves. I enjoy checking what's inside the game files and apps, learning how they work.", image: "Material(s)/Hobbies2.jpg" },
        { title: "Cooking", description: "I have been cooking at home for a very long time now. I never realized how easy it was for me to cook until I made my first dish using a recipe from the internet.", image: "Material(s)/Hobbies3.jpg" },
        { title: "DIY (Do-It-Yourself) Projects and Tech/Mechanical Customization", description: "I spend most of my time customizing my laptop and buying new equipment, from controllers and speakers to USB hubs. It became my hobby to buy and assemble things. I am also interested in buying other equipment like blades for carving, or things I could use for designing or customizing items. As long as I can combine two things, I will do it.", image: "Material(s)/Hobbies4.jpg" },
        { title: "Media Editing/Making", description: "It has also been a hobby for me to edit photos, videos, and audio, even making them from scratch. I was inspired to do it when I was younger by watching videos on YouTube. This inspired me to make and edit my own videos. I also started editing photos, especially for thumbnails, and then I began editing some audio, including music and sound effects. These activities became a hobby for me and benefitted me as I became more creative. It also expanded my scope, as now I can not only edit pictures, videos, and audio but also create and edit websites, blogs, and programs. With the help of creativity and imagination, I can do a lot.", image: "Material(s)/Hobbies5.jpg" },
        { title: "Traditional/Digital Drawing", description: "During my younger days, it seemed I was only good at drawing simple things based on my preferences. I loved dinosaurs, cars, trains, and Sonic when I was a child. That's why I drew them a lot. Then I started to be more imaginative and creative, drawing tanks, mechs, and other vehicles used for combat. However, my skills in drawing didn't improve much, as I only drew stickmen or 2D lines. However, during my first weeks or months in college, I started to learn more about drawing, including values, shades, elements, and lighting. This can help me more in my career, especially since I have a talent for photo editing.", image: "Material(s)/Hobbies6.jpg" },
        { title: "Buying Online", description: "Weird as it seems, it became my hobby to buy stuff online, especially on Lazada. It is usually my main app. I don't use social media often, such as Facebook, Instagram, TikTok, or even Twitter. All I use is Lazada, and I scroll through vouchers and deals. I love buying cheap but good quality products there. As long as they are LazMall, I will buy them.", image: "Material(s)/Hobbies7.jpg" },
        { title: "Watching YouTube", description: "Watching YouTube is obviously one of my hobbies I do every day. I love watching reaction videos, DryBar comedy, gameplay, educational videos, tutorials, and guides. This is one of the reasons why it inspired me to make my own videos.", image: "Material(s)/Hobbies8.jpg" },
        { title: "Contributing to Modding/Game Community", description: "It has been a hobby for me to help people, make mods for games, and even repack or share paid games. For modding, I love contributing to Steam Workshops, which inspired me to make my own mod pack for Rusted Warfare so that all Android users can try out the mods downloaded from Steam. Though I am currently learning coding, in the future I might create my own mods, not just for Rusted Warfare but also for other games. Sharing and repacking games has also been my favorite hobby. Currently, I am a contributor to IGG-Games.com. I search for and download games that are not yet shared or uploaded on the website. My latest contributions are Ridge Racer Unbounded and HTR+ Slot Car Simulation. Hopefully, in the future, I will have created my own repacking tool so I can start and help repack more games on FitGirl or IGG-Games.com.", image: "Material(s)/Hobbies9.jpg" },
        { title: "Studying", description: "Yes, it has been my hobby to learn more, from watching educational videos on YouTube to real-life experiences, books, articles, school modules, and even online. I love to learn more about things beyond my sector or scope. Even if I am a BSEMC or a game developer, I still love to learn other things, such as finances, business, learning other languages, some laws, or even history. Somehow, it's my hobby to expand my knowledge because I know I can use it in the future.", image: "Material(s)/Hobbies10.jpg" },
        { title: "Quiet Time with the Lord", description: "It is not just my hobby but also a part of my life and what I usually do every day. I love praying and talking to God, expressing my thoughts, happenings, and struggles to Him. I don't have many friends or best friends. The only ones I usually talk to every day are my parents and God. Surprisingly, it didn't make me feel depressed. I've been lonely for almost decades of life because I'm an introvert. However, whenever I talk to God, I can feel His presence. He is listening to me. And as I read the Bible, I feel like He is talking to me. Therefore, it has always been and will always be a hobby for me to talk to God.", image: "Material(s)/Hobbies11.jpg" }
    ];

    let transitionInProgress = false;

    function showHobby(index) {
        if (transitionInProgress) {
            return;
        }
        transitionInProgress = true;

        const hobby = hobbies[index];
        const hobbyImage = $('#hobby-image');
        $('.arrow').css('animation', 'popOut 0.5s forwards'); // Hide arrows with animation
        $('.hobby-title, .hobby-description').css('opacity', 0); // Fade out title and description

        hobbyImage.css('opacity', 0);

        setTimeout(() => {
            hobbyImage.attr('src', hobby.image).on('load', function() {
                $(this).css({
                    'width': '100%',
                    'height': '100%',
                    'object-fit': 'cover'
                });
                $(this).css('opacity', 1);
            });
            $('.hobby-title').text(hobby.title).css('opacity', 1);
            $('.hobby-description').text(hobby.description).css({
                'opacity': 1,
                'height': 'auto'
            });

            setTimeout(() => {
                transitionInProgress = false;
                $('.arrow').css('animation', 'popIn 0.5s forwards'); // Show arrows with animation
            }, 1000);
        }, 1000);
    }

    $('.arrow.left').click(function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : hobbies.length - 1;
        showHobby(currentIndex);
    });

    $('.arrow.right').click(function() {
        currentIndex = (currentIndex < hobbies.length - 1) ? currentIndex + 1 : 0;
        showHobby(currentIndex);
    });

    showHobby(currentIndex);

    $('.button').on('click', function() {
        window.location.href = '../Website (True).html';
    });
});
