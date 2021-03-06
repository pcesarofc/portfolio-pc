import React from "react";
import TagCloud from "TagCloud";

const TagCloudSphere = () => {

    const myTags = [
        'JavaScript', 'CSS', 'HTML',
        'C', 'C++', 'React',
        'Python', 'Java', 'git',
        'django', 'Node.js', 'OpenCV',
        'GCP', 'MySQL', 'jQuery',
    ];

    var tagCloud = TagCloud('.content', myTags, {

        // radius in px
        radius: 300,

        // animation speed
        // slow, normal, fast
        maxSpeed: 'fast',
        initSpeed: 'fast',

        // 0 = top
        // 90 = left
        // 135 = right-bottom
        direction: 135,

        // interact with cursor move on mouse out
        keep: true

    });

    var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.content').style.color = random_color;

    return <>
        <span class="content"></span>
        <script src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js"> </script>
    </>

}

export default TagCloudSphere;