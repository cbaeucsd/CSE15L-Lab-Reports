<h1>Implementing Group Choices</h1>
This lab report will go over the process of implementing the three group choices from Lab 5. <br>

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

<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/S1_testcode.png" width="800"> <br>
Test Code<br><br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/S1_mainfail.png" width="800"> <br>
Output of my repository, did not store any of the needed links<br><br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/S1_altfail.png" width="800"> <br>
Output of other group's repository, stored one incorrect link<br><br>
We would have to find the first \`, and check if it occurs between a bracket parenthesis pair. If it does,
we check if a second one occurs before the closed bracket or parenthesis, or after. If it happens after, then we disregard it. 
If the first \` happens outside a bracket parenthesis pair, we must then disregard everything between it and the second \`.
We repeat finding "first" and "second" \` until we finish reading the file.
We must also alter our overspecific isValidURL method to account for this character.
Overall, this would take a lot more than 10 lines of code.


</details>

<details open markdown="1">
<summary><h2 id="S_2">Snippet 2</h2></summary>
Markdown Parse should produce 
["a.com","a.com(())","example.com"].

<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/S2_testcode.png" width="800"> <br>
Test Code<br><br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/S2_mainfail.png" width="800"> <br>
Output of my repository, did not store any of the needed links<br><br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/S2_altfail.png" width="800"> <br>
Output of other group's repository, stored one link incorrectly<br><br>
We must alter our overspecific isValidURL method to account for non-typical URLs.
Otherwise, the main thing we need to fix would be for nested parenthesized URLs. We would have to count how many ( are after the first, and make sure we get the full link at the right ). If there aren't enough ) for each (, we do not have a valid hyperlink. This part could potentially be done in around 7-20 lines of code, or could require a major redesign of the code. 

</details>

<details open markdown="1">
  <summary><h2 id="S_3">Snippet 3</h2></summary>
  Markdown Parse should produce 
["https://sites.google.com/eng.ucsd.edu/cse-15l-spring-2022/schedule"].

<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/S3_testcode.png" width="800"> <br>
Test Code<br><br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/S3_mainfail.png" width="800"> <br>
Output of my repository, did not store the needed link<br><br>
<img src="{{ site.baseurl}}/docs/assets/images/lab-report-4/S3_altfail.png" width="800"> <br>
Output of other group's repository, did not store the needed link<br><br>
We must alter our overspecific isValidURL method to account for non-typical URLs.
Otherwise, the rules regarding line breaks seems a bit complicated. We can't have two line breaks in a row between our brackets, and we can only have singular line breaks between our parenthesis, but only right after the opening or right before the closing parenthesis. This would probably take 10-20 lines of code, assuming no major redesign of the code is needed, which it likely is. 
</details>

<script src="{{ site.baseurl}}/js/autoopendetails.js"></script>
