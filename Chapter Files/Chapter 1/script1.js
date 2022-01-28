var i = 0;
var txt = "I woke to the blinding rays of sunshine entering my room. My Mom was screaming at the top of her lungs to wake me up. Then woke up tired and went down to eat breakfast. After eating, rode my cycle to school. And I forgot to introduce myself, My name is Tim there is nothing special about me, Just an average 12-year-old boy. After getting to school, I went over to my Friend John's Place and was talking about a game played together the last day. Then our Math Sir entered the class, Silence spread throughout the class like a Forest fire. He slammed the desk with his enormous hand and told us that we will be having a test now on the exercise he taught us yesterday. Well, I know that most of us know the answers to his questions. He sent links to our tabs. John asked me to distract our sir so that he could get time to hack and find the answers to the questions. Well, I was the one that taught him to hack, he practiced more than me, He became a more powerful hacker than me. I just stood up in my Place and called Him, My heart was pounding in my chest as if it would bounce out of my Chest. I sort of liked the Adrenal pump. Then I pretended to ask a doubt in the question. After some awkward minutes, He cleared all my stupid doubts and was relived seeing John showing a thumbs up with his hand. He sent the answers to my tab and most of our classmates. We typed in the answers and finally, the Test ended. Then our Sir dismissed us and the second he went out, the sound began to fill the class again. John started to collect money from the students to whom he sent the answers. Then ...........";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("story").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

  document.getElementById("next-chapter-link").style.visibility = "visible"
}