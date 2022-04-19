<h1>Improving Markdown Parse</h1>
This lab report will go over three bugs that I have fixed in the given Markdown Parse. 
<div id="toc_container">
<p class="toc_title">Contents</p>
<ul class="toc_list">
<li>1 <a href="#Bug_One">Bug One</a></li>
<li>2 <a href="#Bug_Two">Bug Two</a></li>
<li>3 <a href="#Bug_Three">Bug_Three</a></li>
     
</ul>
</div>

<details open markdown="1">
<summary><h2 id="Bug_One">Bug One</h2></summary>

Code Change:
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-2/Bug_1_change.png" width="800"> <br>
Link to test file that causes symptom:<br>
[https://github.com/cbaeucsd/markdown-parser/blob/main/testbreak2.md](https://github.com/cbaeucsd/markdown-parser/blob/main/testbreak2.md)<br>
Symptom of bug:<br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-2/Bug_1_symptom.png" width="800"><br>
<h4> Summary:</h4>
This file has a period at the end of the file. If the closed parenthesis was not the last character in the file, the program would start the loop again and search for a open bracket, but since it could not, it returns negative 1 for <code>indexOf</code>. This then causes the loop to start from the beginning of the file to find the rest of the characters, causing an infinite loop. The symptom of this loop causes us to run out of memory as we keep filling up the ArrayList with the same links over and over again. 
</details>

<details open markdown="1">
<summary><h2 id="Bug_Two">Bug Two</h2></summary>

Code Change:
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-2/Bug_1_change.png" width="800"> <br>
Link to test file that causes symptom:<br>
[https://github.com/cbaeucsd/markdown-parser/blob/main/testbreak2.md](https://github.com/cbaeucsd/markdown-parser/blob/main/testbreak2.md)<br>
Symptom of bug:<br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-2/Bug_1_symptom.png" width="800"><br>
<h4> Summary:</h4>
This file has a period at the end of the file. If the closed parenthesis was not the last character in the file, the program would start the loop again and search for a open bracket, but since it could not, it returns negative 1 for <code>indexOf</code>. This then causes the loop to start from the beginning of the file to find the rest of the characters, causing an infinite loop. The symptom of this loop causes us to run out of memory as we keep filling up the ArrayList with the same links over and over again. 
</details>

<details open markdown="1">
  <summary><h2 id="Bug_Three">Bug Three</h2></summary>
  
Code Change:
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-2/Bug_1_change.png" width="800"> <br>
Link to test file that causes symptom:<br>
[https://github.com/cbaeucsd/markdown-parser/blob/main/testbreak2.md](https://github.com/cbaeucsd/markdown-parser/blob/main/testbreak2.md)<br>
Symptom of bug:<br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-2/Bug_1_symptom.png" width="800"><br>
<h4> Summary:</h4>
This file has a period at the end of the file. If the closed parenthesis was not the last character in the file, the program would start the loop again and search for a open bracket, but since it could not, it returns negative 1 for <code>indexOf</code>. This then causes the loop to start from the beginning of the file to find the rest of the characters, causing an infinite loop. The symptom of this loop causes us to run out of memory as we keep filling up the ArrayList with the same links over and over again. 
</details>

<script src="{{ site.baseurl}}/js/autoopendetails.js"></script>
