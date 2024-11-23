$(document).ready(function() {
    var header = $('body');
    var backgrounds = [
        'url(Material(s)/Background.jpg)',
        'url(Material(s)/Background1.jpg)',
        'url(Material(s)/Background2.jpg)',
        'url(Material(s)/Background3.jpg)',
        'url(Material(s)/Background4.jpg)',
        'url(Material(s)/Background5.jpg)',
        'url(Material(s)/Background.jpg)'
    ];
    var current = 0;

    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        header.css('background-image', backgrounds[current]);
    }
    setInterval(nextBackground, 10000);

    header.css('background-image', backgrounds[0]);

    let currentIndex = 0;
    const hobbies = [
        { title: "Programming", description: "I was once inspired to be an Accounting, however Programming/Coding never left my heart. Time after time I still wanted to learn more about Programming how it works and why, I also tried watching videos, tutorials, and guide, for me to learn more about it. It became my Hobby once I have a New Laptop, I practice everyday so that I can enchance my skills when it comes to Programming. Hoping that one day I can become a Professional Game/Web/Software Developer.", image: "Material(s)/Hobbies1.jpg" },
        { title: "Gaming", description: "Playing Games has been a part of my life, even as a kid, from playing Toys, to my first Gameboy, up until having my own Android Phone and Laptop. It made me more insterested on", image: "Material(s)/Hobbies2.jpg" },
        { title: "Cooking", description: "I have been cooking at home for a very long time now, I never realized how easy it is for me to cook when I made my first dish by just using the recipe in the internet.", image: "Material(s)/Hobbies3.jpg" },
        { title: "DIY (Do-It-Yourself) Projects and Tech/Mechanical Customization", description: "I spend most of my time, customizing my Laptop, buying new Equipments, from Controllers, Speakers, to USB Hubs. It became my Hobby to buy and assemble stuffs. I'm also interested on buying other equipments like Blades for Curving, or things I could use on designing or customizing things. Aslong as I can combine 2 things, I will do it.", image: "Material(s)/Hobbies4.jpg" }
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
