<h1>Improving Markdown Parse</h1>
This lab report will go over three bugs that I have fixed in the given Markdown Parse. <br><br>
Note: Bug One and Bug Two use the same code change and test file due to only doing 1 commit instead of 2 for two changes.
<div id="toc_container">
<p class="toc_title">Contents</p>
<ul class="toc_list">
<li>1 <a href="#Bug_One">Bug One</a></li>
<li>2 <a href="#Bug_Two">Bug Two</a></li>
<li>3 <a href="#Bug_Three">Bug Three</a></li>
     
</ul>
</div>

<details open markdown="1">
<summary><h2 id="Bug_One">Bug One</h2></summary>

Code Change:<br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-2/Bug_1_change.png" width="800"> <br><br>
Link to test file that causes symptom:<br>
[https://github.com/cbaeucsd/markdown-parser/blob/main/testbreak2.md](https://github.com/cbaeucsd/markdown-parser/blob/main/testbreak2.md)<br><br>
Symptom of bug:<br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-2/Bug_1_symptom.png" width="800"><br><br>
<h4> Summary:</h4>
If the closed parenthesis was not the last character in the file (this one ends in a period), the program would start the loop again and search for a open bracket, but since it could not, it returns negative 1 for <code>indexOf</code>. This then causes the loop to start from the beginning of the file to find the rest of the characters, causing an infinite loop. The symptom of this loop causes us to run out of memory as we keep filling up the ArrayList with the same links over and over again, so we fix it by adding an if statement with <code>openBracket != -1</code>. 
</details>

<details open markdown="1">
<summary><h2 id="Bug_Two">Bug Two</h2></summary>

Code Change:<br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-2/Bug_1_change.png" width="800"> <br><br>
Link to test file that causes symptom:<br>
[https://github.com/cbaeucsd/markdown-parser/blob/main/testbreak2.md](https://github.com/cbaeucsd/markdown-parser/blob/main/testbreak2.md)<br><br>
Symptom of bug:<br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-2/Bug_2_symptom.png" width="800"><br><br>
<h4> Summary:</h4>
This file has a set of brackets and a set of parenthesis that are separated from each other by text, and therefore whatever is in the parenthesis should not be saved, but they are, causing us to have three elements in our ArrayList instead of two. To fix this, we add an extra condition to our if condition <code>closeBracket + 1 == openParen</code> to make sure the brackets and parenthesis are next to each other.
</details>

<details open markdown="1">
  <summary><h2 id="Bug_Three">Bug Three</h2></summary>
  
Code Changes:<br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-2/Bug_3_change.png" width="800"> <br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-2/Bug_3_change2.png" width="800"> <br><br>
Link to test file that causes symptom:<br>
[https://github.com/cbaeucsd/markdown-parser/blob/main/testbreak3.md](https://github.com/cbaeucsd/markdown-parser/blob/main/testbreak3.md)<br><br>
Symptom of bug:<br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-2/Bug_3_symptom.png" width="800"><br><br>
<h4> Summary:</h4>
This file has a image link and our program saves that link. For our purposes, let's assume we don't want any image links saved, which means we should have one link instead of two. We can add more conditions to make sure we don't save image links, which in this case is <code>openBracket == 0 || markdown.charAt(openBracket-1)</code>.
</details>

<script src="{{ site.baseurl}}/js/autoopendetails.js"></script>
