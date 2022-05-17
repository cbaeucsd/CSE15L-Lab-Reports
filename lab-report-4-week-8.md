<h1>Implementing Group Choices</h1>
This lab report will go over the process of implementing the three group choices from Lab 5. <br><br>

[My Markdown Parse Link](https://github.com/cbaeucsd/markdown-parser) <br>
[Other Group's MD Parse Link](https://github.com/Trinnnn/markdown-parser)<br><br>
We will assume that we want our Markdown Parse to only output links that would be hyperlinked.

<div id="toc_container">
<p class="toc_title">Contents</p>
<ul class="toc_list">
<li>1 <a href="#S_1">Snippet 1</a></li>
<li>2 <a href="#S_2">Snippet 2</a></li>
<li>3 <a href="#S_3">Snippet 3</a></li>
     
</ul>
</div>

<details open markdown="1">
<summary><h2 id="S_1">Snippet 1</h2></summary>

Markdown Parse should produce 
["\`google.com","google.com","ucsd.edu"].

<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/s1_testcode.png" width="800"> <br>
Test Code<br><br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/s1_altfail.png" width="800"> <br>

</details>

<details open markdown="1">
<summary><h2 id="S_2">Snippet 2</h2></summary>
Markdown Parse should produce 
["a.com","a.com(())","example.com"].

<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/s2_testcode.png" width="800"> <br>
Test Code<br><br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/s2_altfail.png" width="800"> <br>

</details>

<details open markdown="1">
  <summary><h2 id="S_3">Snippet 3</h2></summary>
  Markdown Parse should produce 
["https://sites.google.com/eng.ucsd.edu/cse-15l-spring-2022/schedule"].

<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/s3_testcode.png" width="800"> <br>
Test Code<br><br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/s3_altfail.png" width="800"> <br>
</details>

<script src="{{ site.baseurl}}/js/autoopendetails.js"></script>
